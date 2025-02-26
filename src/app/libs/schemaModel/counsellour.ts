import mongoose from "mongoose";
const counsellourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    message: {
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

export const counsellourModelData = mongoose.models.counsellourDetails || mongoose.model('counsellourDetails', counsellourSchema) 