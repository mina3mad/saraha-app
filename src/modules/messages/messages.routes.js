import { Router } from "express";
import * as messageController from './controller/messages.controller.js'
import auth from './../../middleware/auth.js';
import validation from "../../middleware/validation.js";
import { addMessageSchema } from "./messageValidation.js";
import { customValidation, upload } from "../../middleware/uploadPhoto.js";
const messageRouter=Router()
messageRouter.post('/addMessage',upload(customValidation.image).single('imageUrl'),validation(addMessageSchema),auth,messageController.addMessage)
messageRouter.get('/allMessages',auth,messageController.allMessages)
messageRouter.delete('/deleteMessage/:id',auth,messageController.deleteMessage)
export default messageRouter
