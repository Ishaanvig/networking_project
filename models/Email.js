import mongoose from "mongoose";
const EmailSchema=new mongoose.Schema({
EmailID:{
    type:String,
        required:true,    
        unique:true,
        trim:true,
},relatedType:{
        type:String,
        required:true, 
        trim:true,
    },relatedId:{
        type:Number,
        required:true,    
        trim:true,
},
Subject:{
        type:String,
        required:true, 
        trim:true,
    },Body:{
        type:String,
        required:true,    
        trim:true,
}, fromEmail:{
 type:String,
        required:true,    
        trim:true,
},ToEmail:{
     type:String,
        required:true,    
        trim:true,
},SendAt:{
     type:String,
        required:true,    
        trim:true,
}
},{timestamps:true})
export const Email=new mongoose.model('email',EmailSchema)