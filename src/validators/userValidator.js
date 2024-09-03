import Joi from "joi";

export const userValidator = (data) => {


  const schema = Joi.object({
    name: Joi.string().pattern(new RegExp('^[a-zA-Z]([a-zA-Z .-]+)?$')).required().min(3).max(100).messages({
      "string.pattern.base": "Name must not contain anything other than alphabet.",
      "string.empty": "Name is a required field.",
      "string.min": "Name must be at least {#limit} characters long.",
      "string.max": "Name must be less than or equal {#limit} characters.",
      "any.required": "Name is a required field.",
    }),
    email: Joi.string().required().email().messages({
      "string.email": "Invalid email address.",
      "string.empty": "Email is a required field.",
      "any.required": "Email is a required field.",
    }),
    password: Joi.string().required().min(6).max(255).messages({
      "string.base": "Enter a strong password as a string.",
      "string.empty": "Password is a required field.",
      "string.min": "Password must be at least {#limit} characters long.",
      "string.max": "Password must be less than or equal {#limit} characters.",
      "any.required": "Password is a required field."
    }),
    confirm_password: Joi.string().required().messages({
      "string.base": "Name must not contain anything other than alphabet.",
      "string.empty": "Confirm password is a required field.",
      "any.required": "Confirm password is a required field.",
    }),
    agreed: Joi.boolean().required().valid(true).messages({
      "any.only": "Please accept our terms and conditions.",
      "boolean.base": "Agreed must be a boolean value like true or false.",
      "boolean.inval": "Agreed must be a boolean value like true or false.",
      "any.required": "Please accept our terms and conditions.",
    }),
  });

  const { error } = schema.validate(data, { abortEarly: false });
  const errorMessages = {};

  if (error && error.details.length > 0) {
    for (let err of error.details) {
      errorMessages[err.context.key] = err.message;
    }
  } else if (data.password && data.password.length >= 6 && !(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>?/|`~]).{8,}$').test(data.password))) {
      errorMessages["password"] = "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character.";
  } else if (data.password != data.confirm_password) {
    errorMessages["confirm_password"] = "The password and the confirm password doesn't match.";
  } 

  return errorMessages;
};
