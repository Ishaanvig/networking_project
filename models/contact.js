import mongoose from "mongoose"
const ContactSchema=new mongoose.Schema({
    ContactID:{
         type:Number,
        require:[true,"plz enter"],   
        unique:true,
        trim:true,
    },
    accountID:{
        type:Number,
        require:[true,"plz enter"],   
        unique:true,
        trim:true,
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
},address:{
     type:String ,
    required:[true,'plz enter'],
    trim:true,
},notes:{
      type:String ,
    required:[true,'plz enter'],
    trim:true,
},createdAt:{
      type:String ,
    required:[true,'plz enter'],
    trim:true,
}
}
,{timestamps:true})
export const contact=mongoose.model('contact',ContactSchema)