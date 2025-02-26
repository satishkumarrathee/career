import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
)

export const contactModelData = mongoose.models.contactDetails || mongoose.model('contactDetails', contactSchema) 