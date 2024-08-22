import { model, models, Schema } from "mongoose";

export const Task = models.Task || model('Task', new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    }
}, {timestamps: true}));