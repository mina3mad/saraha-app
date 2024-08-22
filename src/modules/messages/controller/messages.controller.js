import asyncHandler from '../../../middleware/asyncHandler.js';
import Message from './../../../../database/models/Message.js';



export const addMessage=asyncHandler(async(req,res)=>{
    req.body.createdBy=req.user._id
    req.body.imageUrl=req.file.filename
    const message=await Message.insertMany(req.body)
    return res.status(201).json({message:"message created",message})

})

export const photo=(req,res,next)=>{
    console.log(req.file);
    

}

export const allMessages=asyncHandler(async(req,res)=>{
        const messages=await Message.find({createdBy:req.user._id})
        return res.json({message:"messages is",messages})
})



export const deleteMessage=asyncHandler(async(req,res)=>{
    const message=await Message.deleteOne({createdBy:req.user._id,_id:req.params.id})
    if(!message.deletedCount){
        return res.status(404).json({message:"message not found",status:404})

    }
    return res.json({message:"message deleted successfully",message})

}
)
