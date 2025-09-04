import mongoose from "mongoose"

const leadsSchema=new mongoose.Schema({
    leadID:{
        type:Number,           
    unique:true,
    required:[true,"plz enter"],
    },
    firstname:{
    type:String ,
    required:[true,'plz enter'],
    trim:true,
},lastname:{
    type:String,
    required:[true,"plz enter"],
    trim:true,
},email:{
     type:String ,
    required:[true,'plz enter'],
    trim:true,
},phone:{
     type:Number,
    unique:true,
    required:[true,"plz enter"],
},
company:{
     type:String,
     trim:true,
    required:[true,"plz enter"],
},
leadSource:{
 type:String,
     trim:true,
    required:[true,"plz enter"],
},
status:{
     type:String,
     trim:true,
    required:[true,"plz enter"],
},assignedTo:{
     type:String,
     trim:true,
    required:[true,"plz enter"],
},createdAt:{
     type:String,
     trim:true,
    required:[true,"plz enter"],
}
},{timestamps:true})
export const Leads= mongoose.model('leads',leadsSchema)
