import mongoose from "mongoose";


const coustmerSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        
        required:[true,"plz enter.."],
        uppercase:true,
    },
    LastName:{
        type:String,
        Required:[true,"plz enter.."],
        uppercase:true,
    },
    Email:{
        type:String,
        Required:[true,"plz enter.."],
    
    },
    Password:{
        type:String,
        Required:[true,"plz enter.."],
        minlength:8
        
    },
    ConfirmPassword:{
       type:String,
        Required:[true,"plz enter.."],
        minlength:8,
    },
    AdharCard:{
         type:String,
        
        Required:[true,"plz enter.."],
        
    },
    PanCard:{
         type:String,
        
        Required:[true,"plz enter.."],
        
    },
    BankAccountNumber:{
         type:Number,
        Required:[true,"plz enter.."],
    
    },IFSC:{
         type:String,
        
        Required:[true,"plz enter.."],
        
    },Branch:{
         type:String,
        
        Required:[true,"plz enter.."],
    },
    ACCESSTOKEN:{                              
        Type:String,
    },
    REFRESHTOKEN:{
        Type:String,
    }
    
},{timestamps:true })
export const coustmer= mongoose.model("coustmer",coustmerSchema)