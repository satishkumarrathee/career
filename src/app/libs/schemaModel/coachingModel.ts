import mongoose from "mongoose";
const coachingSchema = new mongoose.Schema({
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
    coaching: {
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

export const coachingModelData = mongoose.models.coachingDetails || mongoose.model('coachingDetails', coachingSchema) 