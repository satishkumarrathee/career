import Connect from "@/app/libs/database";
import { postexamModelData } from "@/app/libs/schemaModel/postexamModel";
import { NextResponse } from 'next/server'
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {
    try {
        await Connect()
        const body = await req.json();
        const {  name, description, examType,imgUrl} = body;
        const Blogs = new postexamModelData({
            name, description, examType,imgUrl
          });

       const result  = await Blogs.save();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}

//GET API

export async function GET() {
  
    let data:any = [];
    let success = true;
    try{
      await Connect();
   data = await postexamModelData.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}
