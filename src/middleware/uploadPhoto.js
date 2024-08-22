import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import ErrorApp from './../utiles/Error.js';


export const customValidation={
    image:['image/jpeg','image/jpg','image/png']
}

export const upload=(customValidation)=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
  
          cb(null, uuidv4()+'-'+file.originalname)
        }
      })
    const fileFilter=(req,file,cb)=>{
        if(customValidation.includes(file.mimetype)){
            cb(null,true)
        }else{
            cb(new ErrorApp("invalid photo format",400))
        }
    }  
    
    const upload = multer({storage,fileFilter })

    return upload
}