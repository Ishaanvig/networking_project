import mongoose from "mongoose";
const CompaignMemberSchema=new mongoose.Schema({
    Id:{
         type:Number,
        required:true,    
        unique:true,
        trim:true,
    },CompaignID:{
        type:String,
        required:true, 
        trim:true,
    },ContactID:{
        type:String,
        required:true,    
        trim:true,
    },Status:{
        type:String,
        required:true, 
        trim:true,
    }
},{timestamps:true})
export const CompaignMember=mongoose.model('compaignMember',CompaignMemberSchema)