import mongoose from "mongoose";
const employerSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    role: {
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
    location: {
        type: String,
        required: true
    },
    payType: {
        type: String,
        required: true
    },
    typeJob: {
        type: String,
        required: true
    },
    overtimePay: {
        type: Boolean,
        required: false
    },
    flexible: {
        type: Boolean,
        required: false
    },
    weeklyPayout: {
        type: Boolean,
        required: false
    },
     deposit: {
        type: Boolean,
        required: false
    },
    mobileAllowance: {
        type: Boolean,
        required: false
    },
    travelAllowance: {
        type: Boolean,
        required: false
    },
    PF: {
        type: Boolean,
        required: false
    },
    laptop: {
        type: Boolean,
        required: false
    },
    healthAllowance: {
        type: Boolean,
        required: false
    },
    joiningBonus: {
        type: Boolean,
        required: false
    },
    annualBonus: {
        type: Boolean,
        required: false
    },
    petrolAllowance: {
        type: Boolean,
        required: false
    },
    internetAllowance: {
        type: Boolean,
        required: false
    }
  
},
    {
        timestamps: true,
    }
)

export const employerModelData = mongoose.models.employerDetails || mongoose.model('employerDetails', employerSchema) 