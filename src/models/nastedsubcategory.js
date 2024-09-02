import { model, models, Schema } from "mongoose";

export const NastedSubCategory = models.NastedSubCategory || model("NastedSubCategory", new Schema({
    parent_category: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true}));