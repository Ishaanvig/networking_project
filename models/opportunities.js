import mongoose from "mongoose";
const Accountschema=new mongoose.Schema({
OpportunityId:{
 type:Number,           
    unique:true,
    required:[true,"plz enter"],
},
AccountID:{
     type:Number,           
    unique:true,
    required:[true,"plz enter"],
},
contactId:{
     type:String,           
    unique:true,
    required:[true,"plz enter"],
},
OpportunityName:{
       type:String,
    required:[true,"plz enter"],
    trim:true,
},Stage:{
     type:String,
    required:[true,"plz enter"],
    trim:true,
},probablity:{
 type:String,
    required:[true,"plz enter"],
    trim:true,
},amount:{
  type:Number,
    required:[true,"plz enter"],
    trim:true,
},expactedCloseDate:{
     type:String,
    required:[true,"plz enter"],
    trim:true,
},assignedTo:{
     type:String,
    required:[true,"plz enter"],
    trim:true,
},createdAt:{
     type:String,
    required:[true,"plz enter"],
    trim:true,
}

},{timestamps:true})
export const opportunity=mongoose.model("opportunity",Accountschema)