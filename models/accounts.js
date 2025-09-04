import mongoose from "mongoose"
const AccountSchema=new mongoose.Schema({
AccountId:{
      type:Number,           
    unique:true,
    required:[true,"plz enter"],
},AccountName:{
       type:String,
    required:[true,"plz enter"],
    trim:true,
},industry:{
       type:String,
    required:[true,"plz enter"],
    trim:true,
},website:{
       type:String,
    required:[true,"plz enter"],
    trim:true,
},phone:{
      type:Number,           
    unique:true,
    required:[true,"plz enter"],
},billingAddress:{
      type:String,           
    trim:true,
    required:[true,"plz enter"],
},AccountOwner:{
 type:String,           
    trim:true,
    required:[true,"plz enter"],
},CreatedAt:{
     type:String,           
    trim:true,
    required:[true,"plz enter"],
}
},{timestamps:true});
export const account=mongoose.model("account",AccountSchema)