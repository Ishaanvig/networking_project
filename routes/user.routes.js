import { Router } from "express";

import {addLogo,addBanner,CreateCoustmer,CreatUser,CreateRoles,createpermission,CreateTeams,LogOutuser,Loginuser} from '../controllers/user.controller.js';
import uploadLogo from "../middleware/multer.middleware.js";
import uploadBanner from "../middleware/multer.banner.js";

const userRouter=Router()
userRouter.post('/Coustmer',CreateCoustmer)
userRouter.post('/User',CreatUser)
userRouter.post('/Roles',CreateRoles)
userRouter.post('/permission',createpermission)
userRouter.post('/Teams',CreateTeams)
userRouter.post('/login',LogOutuser)
userRouter.post('/logout',Loginuser)

userRouter.post('/addLogo', uploadLogo.single('logo'),addLogo)
userRouter.post('/addBanner', uploadBanner.single('banner'),addBanner)


export  default userRouter