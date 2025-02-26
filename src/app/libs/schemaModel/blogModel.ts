import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    metaTitle: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
        required: true
    },
    customUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    }
},
    {
        timestamps: true,
    }
)

export const blogModelData = mongoose.models.blogDetails || mongoose.model('blogDetails', blogSchema) 