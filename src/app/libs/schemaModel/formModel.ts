import mongoose from "mongoose";
const formSchema = new mongoose.Schema({
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
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    descipline: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
)

export const formModelData = mongoose.models.formLists || mongoose.model('formLists', formSchema) 