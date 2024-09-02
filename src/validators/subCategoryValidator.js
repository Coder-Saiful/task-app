import Joi from "joi"

export const subCategoryValidator = (data) => {
    const schema = Joi.object({
        parent_category: Joi.string().required().messages({
            'string.base': 'Parent category must not contain anything other than Mongoose ObjectId.',
            'string.empty': 'Parent category field is a required field.',
            'any.required': 'Parent category field is a required field.',
        }),
        name: Joi.string().required().min(3).max(100).messages({
            'string.base': 'Subcategory name must not contain anything other than alphabet.',
            'string.empty': 'Subcategory name field is a required field.',
            'string.min': 'Subcategory name be at least {#limit} characters long.',
            'string.max': 'Subcategory name must be less than or equal  {#limit} characters.',
            'any.required': 'Subcategory name field is a required field.',
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