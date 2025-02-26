import { db } from "@/app/libs/db";
import { NextResponse } from "next/server";
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        const {email} = body;
        

        // if Email alerady registerd

        const existingEmail  = await db.user.findUnique({
            where:{email}
        });
        if(!existingEmail){
            return NextResponse.json({user:null,message:"Email Doesn't Exists"},{status:409})
        }

        const resetToken = crypto.randomBytes(20).toString("hex");
        const passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex")
        const passwordResetExpires = Date.now() + 60000
        const updatedUser = await db.user.update({
            where: { email },
            data: {
                resetToken: passwordResetToken,
                resetTokenExpiry: new Date(passwordResetExpires)
             
            },
          });
        const resetUrl = `https://careerdefiner.com/reset-password/${resetToken}`
        const transporter = nodemailer.createTransport({
            host: 'smtpout.secureserver.net',
            port: 587,
            secure: false,
            auth: {
                user: 'info@careerdefiner.com',
                pass: 'Career@2024#'
            }
        });
        // Send email
        await transporter.sendMail({
            from: '"Career" <info@careerdefiner.com>',
            to: email,
            subject: 'Your Reset Password Link',
            text: `This link will become invalid in 10 minutes : ${resetUrl}`
        });
         NextResponse.json({updatedUser,message:""},{status:200})

    } catch (error) {

       return NextResponse.json({message:'something went wrong'},{status:500})
         
    }
    
}
  