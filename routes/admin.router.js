import { Router } from "express";

import {createAdmin,createNewsAdmin,createbanner,createlogo} from '../controllers/admin.controller.js'
const adminRouter=Router()

adminRouter.post('/createAdmin',createAdmin)
adminRouter.post('/createNewsAdmin',createNewsAdmin)
adminRouter.post('/banner',createbanner)
adminRouter.post('/logo',createlogo)
adminRouter.post('/logo',createlogo)
adminRouter.post('/logo',createlogo)
adminRouter.post('/logo',createlogo)
adminRouter.post('/logo',createlogo)


export default adminRouter