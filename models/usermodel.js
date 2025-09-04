import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
 const userschema=new mongoose.Schema({
    UserId:{
        type:Number,
        unique:true,
        required:[true,"plz enter.."],

    },
    FirstName:{
        type:String,
        
        trim:true,

    },
    LastName:{
        type:String,
       
        trim:true,
    },Email:{
        type:String,
        
        trim:true,
    },Password:{
        type:String,
        
        trim:true,
    },Phone:{
        type:Number,
        
        trim:true,
    },RoleId:{
         type:Number,
        unique:true,
        required:[true,"plz enter.."],

    },Status:{
          type:String,
        required:true,
        trim:true,
    },CreatedAt:{
  type:String,
        required:true,
        trim:true
    },LastLogin:{
          type:String,
        required:true,
        trim:true
    }
        
    
 },{timestamps:true})
 userschema.methods.generateAccessToken=function (){
   return jwt.sign(
     {
         _id:this._id,
         Email:this.Email,
         Username:this.Username,
         Phone:this.Phone,
 
     },
     process.env.ACCESS_TOKEN_SECRET,
     {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRY
     }
 )
 }
 
 userschema.methods.generateRefreshToken=function (){
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
 export const User=mongoose.model('user',userschema)
