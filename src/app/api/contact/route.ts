import Connect from "@/app/libs/database";
import { contactModelData } from "@/app/libs/schemaModel/contactModel";
import { NextResponse } from 'next/server'
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {
    try {
        await Connect()
        const body = await req.json();
        const { name, contact,state,email,subject,message,district } = body;
        const Contact = new contactModelData({name, contact,state,email,subject,message,district });
       const result  = await Contact.save();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}

//GET API

export async function GET() {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    let data:any = [];
    let success = true;
    try{
      await Connect();
   data = await contactModelData.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}
