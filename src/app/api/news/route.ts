import Connect from "@/app/libs/database";
import { newsModelData } from "@/app/libs/schemaModel/newsModel";
import { NextResponse } from 'next/server'
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {
    try {
        await Connect()
        const body = await req.json();
        const {title, link } = body;
        const Popup = new newsModelData({
            title, link
          });

       const result  = await Popup.save();
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
   data = await newsModelData.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}
