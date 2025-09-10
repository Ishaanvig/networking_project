import mongoose from "mongoose";
const notesSchema=new mongoose.Schema({
    noteId:{
        type:Number,
        required:true,    
        unique:true,
        trim:true,
    },
    relatedID:{
        type:String,
        required:true,    
        unique:true,
        trim:true,
    },
    notetext:{
        type:String,
        required:true,    
        trim:true,
    },
    Createdby:{
        type:String,
        required:true,    
        uppercase:true,
        trim:true,
    },Createdate:{
        type:String,
        trim:true,
        required:true,
    }
},{timestamps:true})
export const Notes=mongoose.model('notes',notesSchema);