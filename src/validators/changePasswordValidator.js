import Joi from "joi"

export const changePasswordValidator = (data) => {
    const schema = Joi.object({
        current_password: Joi.string().required().min(3).max(100).messages({
            'string.base': 'Category name must not contain anything other than alphabet.',
            'string.empty': 'Category name field is a required field.',
            'string.min': 'Category name be at least {#limit} characters long.',
            'string.max': 'Category name must be less than or equal  {#limit} characters.',
            'any.required': 'Category name field is a required field.',
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