
import ErrorApp from './../utiles/Error.js';
const asyncHandler=(fn)=>{
    return (req,res,next)=>{
    fn(req,res,next).catch((error)=>{
        // return res.status(500).json({message:"catch error",error:error.message})
        return next(new ErrorApp("catch error",500))
        
    })
}
}

export default asyncHandler