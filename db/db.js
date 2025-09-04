import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const DB_NAME="networking";

const connectDB=async()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`/n MongoDb Connected !! DB Host:${connectionInstance.connection.host}`)
    }catch(err){
        console.log("MongoDB connection Failed",err);
        process.exit(1);
    }

}

export default connectDB;
