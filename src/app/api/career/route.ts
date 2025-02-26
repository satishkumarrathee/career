import Connect from "@/app/libs/database";
import { careerModelData } from "@/app/libs/schemaModel/careerModel";
import { NextResponse } from 'next/server'
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {
    try {
        await Connect()
        const body = await req.json();
        const { name,qualification,email,districts,states,contact,gender,profile,imgUrl,experience,category } = body;
        const Career = new careerModelData({name,qualification,email,contact,districts,states,gender,profile,imgUrl,experience,category});
       const result  = await Career.save();
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
   data = await careerModelData.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}
