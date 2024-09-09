import { model, models, Schema } from "mongoose";

export const NastedSubCategory = models.NastedSubCategory || model("NastedSubCategory", new Schema({
    parentCategory: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true}));