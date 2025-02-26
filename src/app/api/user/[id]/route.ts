import { db } from "@/app/libs/db";

import { NextResponse } from "next/server";

// import {hash} from 'bcrypt'


// PUT API
    export async function PUT(request: any, content: any) {
        try {
            const id = content.params.id;
            const payload =await request.json();
            // const {name, password,role} = payload
            // const hashedPassword = await hash(password, 10); 
        
            const data = await db.user.update({ where: { id }, data:payload
            //     {
            //     name,
            //     role,
            //    password: hashedPassword
            // } 
        });
            // const {password: newUserPassword, ...rest} = data;
            return NextResponse.json({data, success:true});
        } catch (error) {
            console.error(error);
            return NextResponse.json(
                { message: "Something went wrong" },
                { status: 500 }
            );
        }
    }


// SINGLE ITEM GET API
export async function GET(request: any, content: any) {
    try {
        const id = content.params.id;
        const data = await db.user.findUnique({ where: {id}});
        return NextResponse.json({data, success:true}); // Added closing parenthesis
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}

// DELETE API

    export async function DELETE(request: any, content: any) {
        try {
            const id = content.params.id;
            const data = await db.user.delete({ where: {id}});
            return NextResponse.json({data, success:true}); // Added closing parenthesis
        } catch (error) {
            console.error(error);
            return NextResponse.json(
                { message: "Something went wrong" },
                { status: 500 }
            );
        }
    }
