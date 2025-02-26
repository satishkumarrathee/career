import Connect from "@/app/libs/database";
import { blogModelData } from "@/app/libs/schemaModel/blogModel";
import { NextResponse } from 'next/server'
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {
    try {
        await Connect()
        const body = await req.json();
        const { name, message,imgUrl,metaTitle,metaDescription,customUrl,title,keywords } = body;
        const Blogs = new blogModelData({
            name,
            message,
            imgUrl,metaDescription,metaTitle,customUrl,title,keywords
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
   data = await blogModelData.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}
