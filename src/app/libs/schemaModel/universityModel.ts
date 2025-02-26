import mongoose from "mongoose";
const universitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
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
    address2: {
        type: String,
        required: false
    },
    address1: {
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

export const universityModelData = mongoose.models.universityDetails || mongoose.model('universityDetails', universitySchema) 