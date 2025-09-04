import mongoose from "mongoose"
const user =new mongoose.Schema({
    Name:{
type:String,
required :[true,"plz enter..."],
trim:true,
    },
    Course:{
        type:String,
        required:[true,"plz enter..."],
        trim:true,
    },
    AntrolementNumber:{
 type:Number,
 required:true,
    },Year:{
        type:String,
        required:true,
        trim:true,
    },PhoneNumber:{
         type:Number,
         required:[true,"plz enter..."],
    },Email:{
         type:String,
        required:[true,"plz enter..."],
        trim:true,
    }, UserName:{
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
     RegistrationSchema.methods.generateAccessToken=function (){
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
     
     RegistrationSchema.methods.generateRefreshToken=function (){
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
   
export const registration=mongoose.model('registration',RegistrationSchema)
