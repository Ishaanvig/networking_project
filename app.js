import express from 'express'
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();

// Re-create __dirname in ES modules
app.use(express.static(path.join(__dirname, 'public')));



app.use(express.json())

app.use(express.urlencoded({
    extended:true,
}))




app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("this is demo website url")
})
//routes import 

//routes decleration
app.use("/api/v1/users",userRouter)



export default app;


