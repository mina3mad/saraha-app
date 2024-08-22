import fs from 'fs'
import path from 'path';


const validation=(schema)=>{
    return  (req,res,next)=>{
        const {error}=schema.validate({
            ...req.body,
            ...req.params,
            ...req.query,
        },{abortEarly:false})
        if(error){
            if (req.file) {    //to handle if any error in validation delete the photo that uploaded
                fs.unlink(path.join(path.resolve(), req.file.path), (err) => {
                    if (err)
                    return res.status(500).json({ error: 'Error deleting file after validation failure' });
                    else{
                        console.log("photo deleted successfully");
                    }
                });
            }
            return res.status(400).json({message:"validation error",error:error.details})
        
        }
        return next()
    }
}

export default validation

