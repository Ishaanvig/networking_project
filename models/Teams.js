import mongoose from "mongoose"

const SchemaTeams=new mongoose.Schema({
    TeamID:{
        type:Number,
        require:true,    
        unique:true,
        trim:true,
    },TeamName:{
          type:String,
        require:true,
        unique:true,
        trim:true,
        UpperCase:true,
},ManagerID:{
     type:Number,
        require:true,
        unique:true,
        trim:true,
},
CreatedAt:{
      type:String,
        require:true,
    
        trim:true,
}
},{timestamps:true})
export const Team=mongoose.model("team",SchemaTeams);