import Connect from "@/app/libs/database";
import { admissionModelData } from "@/app/libs/schemaModel/admissionModel";
import { NextResponse } from 'next/server'
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {
    try {
        await Connect()
        const body = await req.json();
        const {name, contact, email,state,district,specilization,courseType,gender,dateOfBirth,course } = body;
        const University = new admissionModelData({
            name, contact, email,state,district,specilization,courseType,gender,dateOfBirth,course
          });

       const result  = await University.save();
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
   data = await admissionModelData.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}
