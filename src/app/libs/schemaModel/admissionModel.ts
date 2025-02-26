import mongoose from "mongoose";
const admissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
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
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    specilization: {
        type: String,
        required: true
    },
    courseType: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
)

export const admissionModelData = mongoose.models.admissionDetails || mongoose.model('admissionDetails', admissionSchema) 