import mongoose from "mongoose";
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }},
    {
        timestamps: true,
    }
)

export const newsModelData = mongoose.models.newsDetails || mongoose.model('newsDetails', newsSchema) 