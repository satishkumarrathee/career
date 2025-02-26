import Connect from "@/app/libs/database";
import { contactModelData } from "@/app/libs/schemaModel/contactModel";
import { NextResponse } from 'next/server'


// PUT API

export async function PUT(request:any, content:any) {
    const id = content.params.id;
   const filter = {_id:id}
   const payload =await request.json();
   await Connect();
   const data = await contactModelData.findOneAndUpdate(filter,payload)
    return NextResponse.json({data, success:true})}



//SINGLE ITEM GET API

export async function GET(request:any, content:any) {
    const id = content.params.id;
   const record = {_id:id}
   await Connect();
   const data = await contactModelData.findById(record)
    return NextResponse.json({data, success:true})}


// DELETE API

export async function DELETE(request:any, content:any) {
    const id = content.params.id;
   const record = {_id:id}
   await Connect();
   const data = await contactModelData.deleteOne(record)
    return NextResponse.json({data})}