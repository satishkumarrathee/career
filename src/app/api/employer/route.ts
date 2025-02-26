import Connect from "@/app/libs/database";
import { employerModelData } from "@/app/libs/schemaModel/employerModel";
import { NextResponse } from 'next/server'
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {
    try {
        await Connect()
        const body = await req.json();
        const {name,designation,weeklyPayout,role,district,state,overtimePay,location,flexible,payType, deposit,typeJob,mobileAllowance,travelAllowance,PF,laptop,healthAllowance,joiningBonus,annualBonus,petrolAllowance,internetAllowance } = body;
        const Employer = new employerModelData({name,designation,district,state,weeklyPayout,role,overtimePay,location,flexible,payType, deposit,typeJob,mobileAllowance,travelAllowance,PF,laptop,healthAllowance,joiningBonus,annualBonus,petrolAllowance,internetAllowance });
       const result  = await Employer.save();
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
   data = await employerModelData.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}
