import joi  from "joi";


export const addMessageSchema=joi.object({
    content:joi.string().min(3).max(500).required(),
    // file: joi.object({
    //     fieldname: joi.string().required(),
    //     originalname: joi.string().required(),
    //     encoding: joi.string().required(),
    //     mimetype: joi.string().valid('image/jpeg','image/jpg','image/png').required(), 
    //     destination: joi.string().required(),
    //     filename: joi.string().required(),
    //     path: joi.string().required(),
    //     size: joi.number().required()
    // }).unknown()
})

