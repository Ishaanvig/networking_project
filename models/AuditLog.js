import mongoose from "mongoose";
const auditSchema=new mongoose.Schema({
    LogId:{
         type:Number,
        required:true,    
        unique:true,
        trim:true,
    },UserId:{
        type:String,
        required:true, 
        trim:true,
    },Action:{
        type:String,
        required:true,    
        trim:true,
    },EntityType:{
        type:String,
        required:true, 
        trim:true,
    },EntityId:{
        type:String,
        required:true, 
        trim:true,
    },timestamps:{
        type:String,
        required:true, 
        trim:true,
    },
},{timestamps:true})
export const Audit=mongoose.model('Audit',auditSchema)