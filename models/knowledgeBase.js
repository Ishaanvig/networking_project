import mongoose from "mongoose";
const KnowledgeSchema=new mongoose.Schema({
    ArticaleId:{
         type:Number,
        required:true,    
        unique:true,
        trim:true,
    },Title:{
        type:String,
        required:true, 
        trim:true,
    },Content:{
        type:String,
        required:true,    
        trim:true,
    },category:{
        type:String,
        required:true, 
        trim:true,
    },createdAt:{
        type:String,
        required:true, 
        trim:true,
    },CreatedBy:{
         type:String,
        required:true, 
        trim:true,
        
    }
},{timestamps:true})
export const KnowledgeBase = mongoose.model('Knowledge',KnowledgeSchema)