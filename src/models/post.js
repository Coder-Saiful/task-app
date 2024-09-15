import { model, models, Schema } from "mongoose";

export const Post =
  models.Post ||
  model(
    "Post",
    new Schema(
      {
        author: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        title: {
          type: String,
          required: true,
          trim: true
        },
        slug: {
          type: String,
          required: true,
          trim: true
        },
        description: {
          type: String,
          required: true,
          trim: true
        },
        category: {
          type: Schema.Types.ObjectId,
          ref: "NastedSubCategory",
          required: true,
        },
        images: [
          {
            type: String,
            required: true,
          },
        ],
        isPublished: {
          type: Boolean,
          default: false,
        },
      },
      { timestamps: true }
    )
  );

  