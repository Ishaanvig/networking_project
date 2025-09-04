import mongoose from "mongoose";
import mongoosefrom  from "mongoose";
const schemaNews=new mongoose.Schema({
    Id:{
        type:Number,
        Required:[true,"plz enter .."],
        

    },
    Title:{
        type:String,
        Required:[true,"plz enter.."],
        uppercase:true,
    },
    Content:{
        type:String,
         Required:[true,"plz enter .."],
        lowercase:true,

    },
    Description:{
        type:String,
         Required:[true,"plz enter .."],
        lowercase:true,

    },
    Source:{
        type:String,
         Required:[true,"plz enter .."],
        lowercase:true,

    },
    Author:{
        type:String,
         Required:[true,"plz enter .."],
        uppercase:true,
    },Language:{
     type:String,
         Required:[true,"plz enter .."],
        uppercase:true,
    }
},{timestamps:true});
export const news=mongoose.model('news',schemaNews)