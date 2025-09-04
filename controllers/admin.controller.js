import bcrypt from'bcrypt'
import { admin } from '../models/admin.js'
import asyncHandler from '../utils/asyncHandler.js'
import ApiError from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'
import { Banner } from '../models/banner.js'
import { news } from '../models/news.js'
import { Logo } from '../models/logo.js'
 

const createAdmin=asyncHandler(async(req,res)=>{
    const{username,email,password}=req.body
    if(!(username&&email&&password)){
        throw new ApiError(401,"plz enter the crudentials....")
    }


const encryptpassword=await bcrypt.hash(password,10);
const CA=await admin.create({
    username,
    email,
    password:encryptpassword,
})
if(!CA) throw new ApiError(401,"your registration unsucess...");
res.status (201).json(new ApiResponse(201,"you enter sucess..."));


})
//news model api
const createNewsAdmin=asyncHandler(async(req,res)=>{

    const {title,Language,Id,Title,Content,Description,Author,Source}=req.body

    if(!(title && Description&&Id&&Title&&Content&&Author&&Source&&Language)) throw new ApiError(401,"All fileds are mendatory!!!!1")


        const newNews=await news.create({
            title,Description,Title,Id,Content,Author,Source,Language
        })
        res.status(201).json(new ApiResponse(201,"model created..."))
      if(!newNews) throw new ApiError(401,"some thing wrong happens ....try again....")
})
//BannerModel
const createbanner=asyncHandler(async(req,res)=>{
    const {title,imageUrl,link}=req.body;
    if(!(title&&imageUrl&&link)){
        throw new ApiError(401,"all fields are mindatory....");
    }
    const CB=await Banner.create({
        title,
        imageUrl,
        link,
    })
    if(!CB){
        throw new ApiError(401,"some thing wrong happens ....try again...")
    }
res.status(201).json(new ApiResponse(201,"banner created..."));
})
//logo model
const createlogo=asyncHandler(async(req,res)=>{
const {name,imageUrl,isActive}=req.body;
if(!(name&&imageUrl&&isActive)){
    throw new ApiError(401,"all fields aremindatory..... ");
}
const CB=await Logo.create({
name,
imageUrl,
isActive,
})
if(!CB){ throw new ApiError(401,"Some thing wrongr happens...");}
res.status(201).json(new ApiResponse(201,"logo created"))
})

export {createAdmin,createNewsAdmin,createbanner,createlogo}