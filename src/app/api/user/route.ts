import { db } from "@/app/libs/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import { getCurrentUser } from "../../../../actions/getCurrentUser";


export async function POST(req:Request) {
    try {
        const body = await req.json();
        const {email, name, password} = body;

        // if Email alerady registerd

        const existingEmail  = await db.user.findUnique({
            where:{email}
        });
        if(existingEmail){
            return NextResponse.json({user:null,message:'Email Already Exists'},{status:409})
        }
        // if User alerady registerd

        // const existingUser  = await db.user.findUnique({
        //     where:{username}
        // });
        // if(existingUser){
        //     return NextResponse.json({user:null,message:'User Already Exists'},{status:409})
        // }
        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data:{
                name,
                email,
               password: hashedPassword
            }
        }) 

        return NextResponse.json({user:newUser,message:'user created successfully'},{status:201})

    } catch (error) {

       return NextResponse.json({message:'something went wrong'},{status:500})
         
    }
    
}


// GET API
export async function GET() {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role === 'SUPERADMIN') {
    try {
      const data = await db.user.findMany();
      return NextResponse.json({ data, success: true });
    } catch (error) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Unauthorized User" },
      { status: 401 }
    );
  }
}
  