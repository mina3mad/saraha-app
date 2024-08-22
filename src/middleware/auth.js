import  jwt  from 'jsonwebtoken';

const auth=(req,res,next)=>{
    const authorization=req.headers.authorization
        const token=authorization.split(' ')[1]
        const payload=jwt.verify(token,'sarahaApp')
        if(!payload){
            return res.status(400).json({message:"invalid payload"})
        }
        req.user=payload
        return next()
}

export default auth