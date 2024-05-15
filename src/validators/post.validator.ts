import Joi from "joi";

export const postValidator =
    Joi.object({

    title: Joi.string().required().messages({'string.required': 'field is required'}),
    body: Joi.string().required().messages({'string.required': 'field is required'}),
    userId: Joi.number().required().min(1).max(10).messages(
        {
            'number.required': 'field is required',
            'number.min': 'userId is >1',
            'number.max': 'userId is <11',
        }
    )
})