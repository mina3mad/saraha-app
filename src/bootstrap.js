import dbConnect from '../database/connection.js'
import userRouter from'./modules/users/users.routes.js'
import messageRouter from './modules/messages/messages.routes.js';
import globalError from './middleware/globalError.js';
const bootstrap=(app,express)=>{
    process.on('uncaughtException',(err)=>{
        console.log(err);
        
    })
    dbConnect()
    app.use(express.json())
    app.use('/users',userRouter)
    app.use('/messages',messageRouter)
    app.use('*',(req,res,next)=>{
        res.json({message:"not found"})
    })
    process.on('unhandledRejection',(err)=>{
        console.log(err);
        
    })
    app.use(globalError)
}
export default bootstrap