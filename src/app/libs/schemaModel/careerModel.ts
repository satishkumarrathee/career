import mongoose from "mongoose";
const careerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true

    },
    gender: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    states: {
        type: String,
        required: true
    },
    districts: {
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
    experience: {
        type: String,
        required: true
    },
    category: {
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

export const careerModelData = mongoose.models.careeraLists || mongoose.model('careeraLists', careerSchema) 