import Joi from "joi";

export const postValidator = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(200).messages({
      "string.base": "Enter your Post title as a string.",
      "string.empty": "Post title is a required field.",
      "string.min": "Post title must be at least {#limit} characters long.",
      "string.max": "Post title must be less than or equal {#limit} characters.",
      "any.required": "Post title is a required field.",
    }),
    description: Joi.string().required().min(3).max(50000).messages({
      "string.base": "Enter your Post description as a string.",
      "string.empty": "Post description is a required field.",
      "string.min":  "Post description must be at least {#limit} characters long.",
      "string.max": "Post description must be less than or equal {#limit} characters.",
      "any.required": "Post description is a required field.",
    }),
    category: Joi.string().required().min(3).max(50000).messages({
      "string.base": "Enter your a post category as a string/mongoose objectId.",
      "string.empty": "Post category is a required field.",
      "any.required": "Post category is a required field.",
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
