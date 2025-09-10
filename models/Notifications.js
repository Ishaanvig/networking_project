import mongoose from "mongoose";
const NotificationSchema=new mongoose.Schema({
    NotificationId:{
         type:Number,
        required:true,    
        unique:true,
        trim:true,
    },UserId:{
        type:String,
        required:true, 
        trim:true,
    },Message:{
        type:String,
        required:true,    
        trim:true,
    },Status:{
        type:String,
        required:true, 
        trim:true,
        default:0,
    },createdAt:{
         type:String,
        required:true, 
        trim:true,
    }
},{timestamps:true})
export const Notification=mongoose.model('Notification',NotificationSchema)