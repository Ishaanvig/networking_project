import mongoose from "mongoose"

const loginSchema=new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        trim:true,
    },
    Password:{
type:String,
required:true,
unique:true,
    }
},{timestamps:true});
 loginSchema.methods.generateAccessToken=function (){
   return jwt.sign(
     {
         _id:this._id,
         UserName:this.UserName,
         Password:this.Password
 
     },
     process.env.ACCESS_TOKEN_SECRET,
     {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRY
     }
 )
 }
 
 loginSchema.methods.generateRefreshToken=function (){
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
 export const Login=mongoose.model('Login',loginSchema)