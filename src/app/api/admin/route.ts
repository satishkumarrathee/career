import Connect from "@/app/libs/database";
import { adminUserModelData } from "@/app/libs/schemaModel/adminUserModel";
import { NextResponse } from 'next/server'
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {
    try {
        await Connect()
        const body = await req.json();
        const {name, password, email, role} = body;
        const Admin = new adminUserModelData({
            name, password, email, role
          });

       const result  = await Admin.save();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}

//GET API

export async function GET() {
  const currentUser = await getCurrentUser();
  if(!currentUser || currentUser.role !== 'ADMIN'){
      return 
  }
    let data:any = [];
    let success = true;
    try{
      await Connect();
   data = await adminUserModelData.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}
