import  {Router}  from "express";
import *as userController from './controller/users.controller.js'
import validation from "../../middleware/validation.js";
import { confirmEmailSchema, loginSchema, signUpSchema } from "./userValidation.js";
const userRouter=Router()
userRouter.post('/signUp',validation(signUpSchema),userController.signUp)
userRouter.post('/login',validation(loginSchema),userController.login)
userRouter.patch('/confirmEmail',validation(confirmEmailSchema),userController.confirmEmail)

export default userRouter