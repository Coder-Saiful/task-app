import { model, models, Schema } from "mongoose";

export const SubCategory = models.SubCategory || model("SubCategory", new Schema({
    parent_category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    nasted_sub_categories: [{type: Schema.Types.ObjectId, ref: "NastedSubCategory"}]
}, {timestamps: true}));