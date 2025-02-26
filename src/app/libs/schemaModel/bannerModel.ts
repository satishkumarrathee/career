import mongoose from "mongoose";
const bannerSchema = new mongoose.Schema({
  
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
)

export const bannerModelData = mongoose.models.bannerDetails || mongoose.model('bannerDetails', bannerSchema) 