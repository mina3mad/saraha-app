import mongoose, { Schema } from "mongoose";

const messageSchema=new Schema({
    content:{
        type:String,
        required:true,
        minLength:3,
        maxLength:500,
        trim:true
    },
    imageUrl:{
        type:String,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'
    }
},)

const Message=mongoose.model('Message',messageSchema)
export default Message