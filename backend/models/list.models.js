import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    isdone:{
        type:Boolean,
        default:false
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true});

export const List = mongoose.model('List',listSchema);
