import Joi from "joi";

export const postValidator = Joi.object({

    title: Joi.string().required().messages({'string.required':'field is required'}),
    body: Joi.string().required().messages({'string.required':'field is required'})
})