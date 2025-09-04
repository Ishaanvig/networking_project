import mongoose from "mongoose";

import jwt from 'jsonwebtoken'
const  AdminSchema=new  mongoose.Schema({
    username:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
   
  
},
email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
    
},
password:{
    type:String,
    required:[true,"Password is Required"],
 
}

},{timestamps:true})
Admin.methods.generateAccessToken=function (){
  return jwt.sign(
    {
        _id:this._id,
        email:this.email,
        username:this.username,

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

Admin.methods.generateRefreshToken=function (){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const admin= mongoose.model("admin",AdminSchema);
