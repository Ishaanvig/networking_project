import mongoose from "mongoose";
const TicketSchema=new mongoose.Schema({
    TicketId:{
         type:Number,
        required:true,    
        unique:true,
        trim:true,
    },ContactId:{
        type:String,
        required:true, 
        trim:true,
    },Subject:{
        type:String,
        required:true,    
        trim:true,
    },Description:{
        type:String,
        required:true, 
        trim:true,
    },status:{
        type:String,
        required:true, 
        trim:true,
    },Priority:{
        type:String,
        required:true, 
        trim:true,
    },assignTo:{
        type:String,
        required:true, 
        trim:true,
    },createdAt:{
         type:String,
        required:true, 
        trim:true,
        
    }
},{timestamps:true})
export const Ticket=mongoose.model('ticket',TicketSchema)