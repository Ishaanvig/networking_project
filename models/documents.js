import mongoose from "mongoose";
const documentSchema=new mongoose.Schema({
    DocumentId:{
        type:Number,
        required:true,    
        unique:true,
        trim:true,
    },
    relatedType:{
        type:String,
        required:true, 
        trim:true,
    },relatedid:{
        type:Number,
        required:true,    
        trim:true,
    },filename:{
        type:String,
        required:true,    
        unique:true,
        trim:true,
    },fileURL:{
        type:String,
        required:true,    
        unique:true,
        trim:true,
    },uploadedBy:{
      type:String,
        required:true,    
        trim:true,
    },Createdat:{
        type:Number,
        required:true,    
        trim:true,
    }
},{timestamps:true})
export const Document=mongoose.model("document",documentSchema)