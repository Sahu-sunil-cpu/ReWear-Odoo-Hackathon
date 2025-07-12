import mongoose, { modelNames, mongo } from "mongoose";

const labelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});

export const Label = mongoose.model('Label',labelSchema);