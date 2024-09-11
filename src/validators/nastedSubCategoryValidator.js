import Joi from "joi"

export const nastedSubCategoryValidator = (data) => {
    const schema = Joi.object({
        parentCategory: Joi.string().required().messages({
            'string.base': 'Parent category/Subcategory must not contain anything other than Mongoose ObjectId.',
            'string.empty': 'Parent category/Subcategory field is a required field.',
            'any.required': 'Parent category/Subcategory field is a required field.',
        }),
        name: Joi.string().required().min(3).max(100).messages({
            'string.base': 'Nasted subcategory name must not contain anything other than alphabet.',
            'string.empty': 'Nasted subcategory name field is a required field.',
            'string.min': 'Nasted subcategory name be at least {#limit} characters long.',
            'string.max': 'Nasted subcategory name must be less than or equal  {#limit} characters.',
            'any.required': 'Nasted subcategory name field is a required field.',
        })
    });

    const {error} = schema.validate(data, {abortEarly: false});
    const errorMessages = {};

    if (error) {
        for (let err of error.details) {
            errorMessages[err.context.key] = err.message;
        }
    }

    return errorMessages;
}