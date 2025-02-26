import mongoose from "mongoose";
const postexamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    examType: {
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

export const postexamModelData = mongoose.models.postexamDetails || mongoose.model('postexamDetails', postexamSchema) 