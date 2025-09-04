import bcrypt from'bcrypt'
import { coustmer} from '../models/coustmer.js'
import asyncHandler from '../utils/asyncHandler.js'
import ApiError from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'

import { User } from '../models/usermodel.js'
import { Role } from '../models/roles.js'
import { Permission } from '../models/permissition.js'
import { Login } from '../models/login.js'
import { Leads } from '../models/leads.js'
import { Team } from '../models/Teams.js'

//coustmer model
const CreateCoustmer=asyncHandler(async(req,res)=>{
    const{ customer_id, Branch,IFSC,BankAccountNumber,PanCard,AdharCard,ConfirmPassword,password,Email,LastName,FirstName}=req.body;
if(!( Branch&&IFSC&&BankAccountNumber&&PanCard&&AdharCard&&ConfirmPassword&&password&&Email&&LastName&&FirstName)){
    throw new ApiError(401,'plz enter first...');
}
const reserv=await coustmer.findOne({
  customer_id
})
if(reserv) throw new ApiError(401,"Customer Already Registered!!!")

const CC=await coustmer.create({
  customer_id,  ACCESSTOKEN,REFRESHTOKEN,Branch,IFSC,BankAccountNumber,PanCard,AdharCard,ConfirmPassword,password:encryptedPassword,Email,LastName,FirstName
})
if(!CC) throw new ApiError(401,"failed......");
res.status (201).json(new ApiResponse(201,"sucessfully created......"))

})
// user &access Management

const CreatUser =asyncHandler(async(req,res,next)=>{
    const {UserId,FirstName,LastName,Email,Password,Phone,RoleId,Status,CreatedAt,LastLogin} =req.body;
    if(!(UserId&&FirstName&&LastName&&Email&&Password&&Phone&&RoleId&&Status&&CreatedAt&&LastLogin)){
        throw new ApiError(401,"plz enter first....");
    }
    const reserv=await User.findOne({
   UserId
})
if(reserv) throw new ApiError(401,"user already registerd......")

    const cu=await User.create({
UserId,FirstName,LastName,Email,Password,Phone,RoleId,Status,CreatedAt,LastLogin
})
if(!cu) throw new ApiError(401,'failed....');
res.status (201).json(new ApiResponse(201,"sucessfully created.........."));
})
//delet user
const DeletUser=asyncHandler(async(req,res)=>{
    const {UserId}=req.body
    const findUser=await User.findOne({UserId})
    if(!findUser) throw new ApiError(401,"user not found...")
        const delUser=await User.findOneAndDelete({UserId})
    if(!delUser) throw new ApiError(401,"not deleted")
        res.status (201).json(new ApiResponse(201,{},'successfully deleted.......'))
})
// updaste user
const UpdateUser=asyncHandler(async(req,res)=>{
const {UserId,Phone,Status,FirstName,LastName}=req.body;
const oldUser=await User.findOne({UserId})
oldUser.Phone=Phone
oldUser.Status=Status
oldUser.FirstName=FirstName
oldUser.LastName=LastName
await oldUser.save()
res.status(201).json(new ApiResponse(201,{},'user updated sucessfully.....'))
})
//roles

const CreateRoles=asyncHandler(async(req,res)=>{
    const {RoleId,RoleName,Description }=req.body;

if(!(RoleId && RoleName && Description)){
throw new ApiError(401,"plz enter first.....")
}
const reserv=await Role.findOne({
RoleId
})
if(reserv) throw new ApiError(401,"user already registerd" )

const rl=await Role.create({
    RoleId,
    RoleName,
    Description,
})
if(!rl) throw new ApiError(401,"failure...");
res.status(201).json (new ApiResponse(201,"you created sucessfully"));
})
//create permission api
const createpermission=asyncHandler(async(req,res)=>{
    const { permissionID,roleID,moduleName,canView}=req.body;
    if(!( permissionID&&roleID&&moduleName&&canView)){
        throw new ApiError(401,"plz enter the crudential first......");
    }
const alreadyAvailable=await Permission.findOne({
    permissionID
})
if(alreadyAvailable) throw new ApiError(401,"permission already registerd.....")
    const pa=await Permission.create({
permissionID,roleID,moduleName,canView
})
if(!pa) throw new ApiError(401,"failed.....to accept permisson.....")
    res.status(201).json(new ApiResponse(201,"your permission aceepted.."))
})

//create teams api
const CreateTeams=asyncHandler(async(req,res)=>{
const {TeamID,TeamName,ManagerID,CreatedAt}=req.body;
if(!(TeamID&&TeamName&&ManagerID&&CreatedAt)){
    throw new ApiError(401,"plz enter crudential firsrt....")
}
const reserv= await Team.findOne({
    TeamID
})
if(reserv) throw new ApiError(401,"already registerd....")
    const ct=await Team.create({
TeamID,TeamName,ManagerID,CreatedAt
})
if(!ct) throw new ApiError(401,'failed....to create....')
    res.status(201).json(new ApiResponse(201,"your team sucessfully created...."))
})
//

// userLoginApi
const Loginuser=asyncHandler(async(req,res)=>{

const {UserName,Password}=req.body

if(!(UserName && Password)) throw new ApiError(401,"All Fields are Mendatory!!!!")

    const checkUser=await Login.findOne({UserName})

    if(!checkUser) throw new ApiError(401,'User not Registered!!!!')

        const ispassMatch =  bcrypt.compare(checkUser.Password,Password)

if(!ispassMatch) throw new ApiError(401,"Wrong Password!!!1")

const accessToken=checkUser.generateAccessToken()
const refreshToken=checkUser.generateRefreshToken()

 checkUser.accessToken=accessToken
 checkUser.refreshToken=refreshToken

 await checkUser.save()
 res.status(201).cookie("accesToken",accessToken).cookie("refreshToken",refreshToken).json(new ApiResponse(201,{},"Login SuccessFully!!!!!!"))
})
//logoutuser
const LogOutuser=asyncHandler(async(req,res)=>{
    const {username}=req.body

    const checkUser=await Login.findOne({username})
    if(!checkUser) throw new ApiError(401,"User not Registered...")
        checkUser.accessToken="";
        checkUser.refreshToken="";
        checkUser.save()


        res.status(201).cookie("accessToken","").cookie("refresToken","").json(new ApiResponse(201,{},"Logout Successfully!!!!!!"))
})





// getall  user login
const getAllUserlogin=asyncHandler(async(req,res)=>{
    const allUserlogin=await Login.findAll()
    res.status(201).json(new ApiResponse(201,allUserlogin,"featch sucessfully...."))
})

// get all user Logout
const getAllUserLogout=asyncHandler(async(req,res)=>{
const AllLogOut=await Login.findAll()
res.status(201).json(new ApiResponse(201,AllLogOut,"featch sucessfully......"))
})

//getall user permission
const getAllPermission=asyncHandler(async(res,req)=>{
const allPermission=await Permission.findAll()
res.status(201).json (new ApiResponse(201,allPermission,"featch sucessfully..."))
})
//getall roles user
const getAllRoles=asyncHandler(async(res,req)=>{
const allUserRoles=await Role.findAll()
res.status(201).json(new ApiResponse(201,allUserRoles,"featch sucessfully.."));

})
//getall user 
const getAllUser=asyncHandler(async(req,res)=>{
    const allUser=await User.findAll()
    res.status(201).json(new ApiResponse(201,allUser,"featch sucessfull....."));
})
//getall coustomer user
const getAllCous=asyncHandler(async(req,res)=>{
    const allUserCoust=await coustmer.findAll()
    res.status(201).json(new ApiResponse(201,allUserCoust,"Users Fetch Success!!"))
})




export{CreateCoustmer,CreatUser,CreateRoles,createpermission,CreateTeams,LogOutuser,Loginuser}
export{getAllUserlogin,getAllUserLogout,getAllPermission,getAllCous,getAllRoles,getAllUser}








//addlogo
const addLogo=asyncHandler(async(req,res)=>{

const {logo,title,description}=req.body

console.log(logo)

})
//addBanner
const addBanner=asyncHandler(async(req,res)=>{

const {banner,title,description}=req.body

console.log(banner)

})


export{addLogo,addBanner}