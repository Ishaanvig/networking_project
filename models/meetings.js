import mongoose from "mongoose";
const meetingschema=new mongoose.Schema({
     MeetingId:{
         type:Number,
        require:true,    
        uniqued:true,
        trim:true,
    },relatedType:{
        type:String,
        required:true, 
        trim:true,
    },relatedid:{
        type:Number,
        required:true,    
        trim:true,
    },MeetingSubject:{
        type:String,
        required:true, 
        trim:true,
    },StartTime:{
        type:String,
        required:true, 
        trim:true,
    },EndTime:{
        type:String,
        required:true, 
        trim:true,
    },Location:{
        type:String,
        required:true, 
        trim:true,
    },Participends:{
        type:String,
        required:true, 
        trim:true,
    }
},{timestamps:true})
export const Meeting=new mongoose.model('meeting',meetingschema)