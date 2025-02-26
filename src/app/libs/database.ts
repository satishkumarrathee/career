import mongoose from "mongoose";
const Url = "mongodb+srv://career:Ak7814478429@cluster0.9ro3amx.mongodb.net/career?retryWrites=true&w=majority";
const Connect = async()=>{
    try{
        await mongoose.connect(Url)
    }catch(err){
        console.log(err)
    }
}
export default Connect;