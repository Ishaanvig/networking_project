import mongoose from "mongoose";

const tasksSchema=new mongoose.Schema({
    Taskid:{
       type:Number,
        required:true,    
        unique:true,
        trim:true, 
    },
    relatedId:{
        type:Number,
        required:true,   
        trim:true,
    },
    TaskTitle:{
        type:String,
        required:true,    
        unique:true,
        trim:true,
    },
    TaskType:{
        type:String,
        required:true,    
        trim:true,
    },
    DueDate:{
        type:String,
        required:true,    
        trim:true,
    },Status:{
        type:String,
        required:true,    
        trim:true,
    },assignTo:{
        type:String,
        required:true, 
        trim:true,
    },CreatedDate:{
        type:String,
        required:true,    
        trim:true,
    },
},{timestamps:true})

 export const Tasks=mongoose.model('tasks',tasksSchema);