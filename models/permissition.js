import mongoose from "mongoose";

const permissionSchema=new mongoose.Schema({
permissionID:{
    type:Number,
    required:true,
    unique:true,                           
},
roleID:{
    type:String,
    required:[true,"plz enter"],
    trim:true,

},
moduleName:{
    type:String,
    required:true,
    trim:true,
},
canView:{
    type:Boolean,
    required:true,
},
} ,{timestamps:true})
export const Permission= mongoose.model("Permission",permissionSchema);