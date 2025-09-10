import mongoose from "mongoose";
const CompaignSchema=new mongoose.Schema({
    CompaignId:{
         type:Number,
        required:true,    
        unique:true,
        trim:true,
    },CompaignName:{
        type:String,
        required:true, 
        trim:true,
    },Type:{
        type:String,
        required:true,    
        trim:true,
    },Status:{
        type:String,
        required:true, 
        trim:true,
    },Budget:{
        type:String,
        required:true, 
        trim:true,
    },StartingDate:{
        type:String,
        required:true, 
        trim:true,
    },EndingDate:{
        type:String,
        required:true, 
        trim:true,
    },CreatedBy:{
         type:String,
        required:true, 
        trim:true,
        
    }
},{timestamps:true})
export const Compaign=mongoose.model('compaign',CompaignSchema)