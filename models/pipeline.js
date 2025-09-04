import mongoose from mongoose
const piplineSchema=new mongoose.Schema({
    stageID : {
       type:Number,           
    unique:true,
    required:[true,"plz enter"],  
    },
    stageName:{
         type:String,           
    trim:true,
    required:[true,"plz enter"],
    },order:{
         type:String,           
    trim:true,
    required:[true,"plz enter"],
    },    
},{timestamps:true})
const pipline=mongoose.models("pipline",piplineSchema)