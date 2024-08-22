import { model, models, Schema } from "mongoose";

export const Category = models.Category || model("Category", new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true}));