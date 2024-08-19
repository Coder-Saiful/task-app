import Joi from "joi";

export const loginValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email().messages({
      "string.email": "Invalid email address.",
      "string.empty": "Email is a required field.",
      "any.required": "Email is a required field.",
    }),
    password: Joi.string().required().messages({
      "string.base": "Name must not contain anything other than alphabet.",
      "string.empty": "Password is a required field.",
      "any.required": "Password is a required field.",
    }),
  });

  const { error } = schema.validate(data, { abortEarly: false });
  const errorMessages = {};

  if (error && error.details.length > 0) {
    for (let err of error.details) {
      errorMessages[err.context.key] = err.message;
    }
  }
  return errorMessages;
};
