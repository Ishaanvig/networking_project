import mongoose from "mongoose";
const callsSchema=new mongoose.Schema({
    CallId:{
         type:Number,
        required:true,    
        unique:true,
        trim:true,
    },relatedType:{
        type:String,
        required:true, 
        trim:true,
    },relatedid:{
        type:Number,
        required:true,    
        trim:true,
    },createdBy:{
        type:String,
        required:true, 
        trim:true,
    },callSummary:{
        type:String,
        required:true, 
        trim:true,
    },CallDuration:{
        type:String,
        required:true, 
        trim:true,
    },CallDate:{
        type:String,
        required:true, 
        trim:true,
    },
},{timestamps:true})
export const Call=mongoose.model("call",callsSchema)