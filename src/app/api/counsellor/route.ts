import Connect from "@/app/libs/database";
import { counsellourModelData } from "@/app/libs/schemaModel/counsellour";
import { NextResponse } from 'next/server'
// import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {
    try {
        await Connect()
        const body = await req.json();
        const {name,experience,message,imgUrl } = body;
        const Counsellor = new counsellourModelData({name,experience,message,imgUrl});
       const result  = await Counsellor.save();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}

//GET API

export async function GET() {
    // const currentUser = await getCurrentUser();
    // if(!currentUser || currentUser.role !== 'ADMIN'){
    //     return 
    // }
    let data:any = [];
    let success = true;
    try{
      await Connect();
   data = await counsellourModelData.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}
