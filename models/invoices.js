import mongoose from "mongoose";
const invoicesSchema=new mongoose.Schema({
    InvoiceId:{
         type:Number,
        required:true,    
        unique:true,
        trim:true,
    },AccountId:{
        type:String,
        required:true, 
        trim:true,
    },ApportunityId:{
        type:String,
        required:true,    
        trim:true,
    },InvoiceNumber:{
        type:String,
        required:true, 
        trim:true,
    },InvoiceDate:{
        type:String,
        required:true, 
        trim:true,
    },DueDate:{
        type:String,
        required:true, 
        trim:true,
    },Amount:{
        type:Number,
        required:true, 
        trim:true,
    },Status:{
         type:String,
        required:true, 
        trim:true, 
    }
},{timestamps:true})
export const Invoices=mongoose.model('invoics',invoicesSchema)