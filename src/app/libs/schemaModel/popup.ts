import mongoose from "mongoose";
const popupSchema = new mongoose.Schema({
    name: {
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
    }
},
    {
        timestamps: true,
    }
)

export const popupModelData = mongoose.models.popupDetails || mongoose.model('popupDetails', popupSchema) 