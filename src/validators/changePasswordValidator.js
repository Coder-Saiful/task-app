import Joi from "joi"

export const changePasswordValidator = (data) => {
    const schema = Joi.object({
        current_password: Joi.string().required().messages({
            'string.base': 'Enter your current password as a string.',
            'string.empty': 'Current password field is a required field.',
            'any.required': 'Current password field is a required field.',
        }),
        new_password: Joi.string().required().min(6).max(255).messages({
            'string.base': 'Enter a strong password as a string.',
            'string.empty': 'New password field is a required field.',
            'string.min': 'New password be at least {#limit} characters long.',
            'string.max': 'New password must be less than or equal  {#limit} characters.',
            'any.required': 'New password field is a required field.',
        }),
        confirm_password: Joi.string().required().messages({
            'string.base': 'Re-type a strong password as a string.',
            'string.empty': 'Current password field is a required field.',
            'any.required': 'Current password field is a required field.',
        })
    });

    const {error} = schema.validate(data, {abortEarly: false});
    const errorMessages = {};

    if (error) {
        for (let err of error.details) {
            errorMessages[err.context.key] = err.message;
        }
    } else if (data.new_password && data.new_password.length >= 6 && !(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>?/|`~]).{8,}$').test(data.new_password))) {
        errorMessages["new_password"] = "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character.";
    } else if (data.new_password != data.confirm_password) {
      errorMessages["confirm_password"] = "The password and the confirm password doesn't match.";
    } 

    return errorMessages;
}