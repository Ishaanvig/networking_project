import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/db.js';
import  app  from './app.js';

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`app is listing at ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed "+ error)
})







































