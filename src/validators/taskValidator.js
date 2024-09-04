import Joi from "joi";

export const taskValidator = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(200).messages({
      "string.base": "Enter your task title as a string.",
      "string.empty": "Task title is a required field.",
      "string.min": "Task title must be at least {#limit} characters long.",
      "string.max": "Task title must be less than or equal {#limit} characters.",
      "any.required": "Task title is a required field.",
    }),
    description: Joi.string().required().min(3).max(50000).messages({
      "string.base": "Enter your task description as a string.",
      "string.empty": "Task description is a required field.",
      "string.min":  "Task description must be at least {#limit} characters long.",
      "string.max": "Task description must be less than or equal {#limit} characters.",
      "any.required": "Task description is a required field.",
    }),
    category: Joi.string().required().min(3).max(50000).messages({
      "string.base": "Enter your task category as a string/mongoose objectId.",
      "string.empty": "Task category is a required field.",
      "any.required": "Task category is a required field.",
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
