import mongoose from "mongoose";

const logoSchema = new mongoose.Schema({
  logo_name: {
    type: String,
    required: true,
    
  },
  title: {
    type: String,
    required: true
  },
  description:{
    type:String,
  },
  isActive: {
    type: Boolean,
    default: true
  }
},{timestamps:true});



export const Logo = mongoose.model('Logo', logoSchema);

