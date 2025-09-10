import mongoose from "mongoose";
const PaymentsSchema=new mongoose.Schema({
    PaymentId:{
         type:Number,
        required:true,    
        unique:true,
        trim:true,
    },invoicedID:{
        type:String,
        required:true, 
        trim:true,
    },PaymentDate:{
        type:String,
        required:true,    
        trim:true,
    },Amount:{
        type:Number,
        required:true, 
        trim:true,
    },PaymentMethod:{
        type:String,
        required:true, 
        trim:true,
    },TransectionId:{
        type:Number,
        required:true,    
        unique:true,
        trim:true,
    }
},{timestamps:true})
export const Payment=mongoose.model('Payment',PaymentsSchema)