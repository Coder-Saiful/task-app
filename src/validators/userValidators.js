import { NextResponse } from 'next/server';
import Joi from 'joi';

export const userValidators = data => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(20),
        email: Joi.string().required().email(),
        avatar: Joi.any().required()
    });
    const {error} = schema.validate(data, {abortEarly: false});
    // const errorMessages = {}
    // for (const err of error.details) {
    //     errorMessages[err.context.key] = err.message
    // }
    // return errorMessages;
    if (error && error.details.length > 0) {
        const errorMessages = {}
        for (const err of error.details) {
            errorMessages[err.context.key] = err.message
        }
        return errorMessages;
    } else {
        return {};
    }
}