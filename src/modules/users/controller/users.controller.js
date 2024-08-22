import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { customAlphabet } from 'nanoid';
import User from './../../../../database/models/User.js';
import sendEmail from '../../../utiles/sendEmail.js';
import ErrorApp from './../../../utiles/Error.js';
import asyncHandler from '../../../middleware/asyncHandler.js';



export const signUp=asyncHandler(async(req,res,next)=>{
    const {email,password,userName}=req.body
    const userExist=await User.findOne({email})
    if(!userExist){
        req.body.password=bcryptjs.hashSync(password,8)
        const code=customAlphabet('0123456789',4)
        req.body.OTP=code()
        const newUser=await User.insertMany(req.body)
        sendEmail({to:email,code:req.body.OTP,userName})
        return res.status(201).json({message:"user is created",newUser})
    }
    return next(new ErrorApp("email already exists!",409)) 

}
)

export const login=asyncHandler(async(req,res,next)=>{
    const {email,password}=req.body
    const userExist=await User.findOne({email})
    if(!userExist){
        return next(new ErrorApp("invalid email or password",400))  
    }
    if(!userExist.confirmEmail){
        return next(new ErrorApp("please confirm email",400))

    }
    const match=bcryptjs.compareSync(password,userExist.password)
    // return match ?res.json({message:"login successfully",userExist}) :res.status(400).json({message:"invalid email or password"})  
        if(!match){
            return next(new ErrorApp("invalid email or password",400)) 
        }
        const token=jwt.sign({email,_id:userExist.id},'sarahaApp')
        return res.json({message:"login successfully",token})
    
})


export const confirmEmail=asyncHandler(async(req,res)=>{
    const{OTP,email}=req.body
    const code=parseInt(OTP,10)
    const userExist=await User.findOne({email})
    if(!userExist){
        return next(new ErrorApp("invalid email ",400))    
    }
    if(userExist.OTP!=code || !code){
        return next(new ErrorApp("invalid code",400))   
    }
    await User.updateOne({email},{confirmEmail:true,OTP:null})
    return res.json({message:"email confirmed"})   

})