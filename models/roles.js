import mongoose from "mongoose";                   
const roleSchema=new mongoose.Schema({
    RoleId:{
type:Number,
required:true,
unique:true,
trim:true,
    },RoleName:{
      type:String,
required:true,
trim:true,  

    },
    Description:{
        type:String,
required:true,
trim:true,
    }
},{timeStramps:true})
export const Role=mongoose.model('role',roleSchema)