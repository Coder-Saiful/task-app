import { model, models, Schema } from "mongoose";

export const Category = models.Category || model("Category", new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    sub_categories: [{type: Schema.Types.ObjectId, ref: "SubCategory"}]
}, {timestamps: true}));