import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:15,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    OTP:{
        type:Number,
        minLength:4,
        maxLength:4
    }
},{
    timestamps:true
})

const User=mongoose.model('User',userSchema)
export default User