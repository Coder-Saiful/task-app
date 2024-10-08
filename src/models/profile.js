import { Schema, models, model } from "mongoose";
export const Profile =
  models.Profile ||
  model(
    "Profile",
    new Schema(
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          unique: true,
          required: true,
        },
        username: {
          type: String,
          unique: true
        },
        avatar: {
          type: String,
          default: "",
        },
        cover_pic: {
          type: String,
          default: "",
        },
        bio: {
          type: String,
          default: "",
          trim: true
        },
        mobile: {
          type: String,
          default: "",
          trim: true
        },
        dob: {
          type: Date,
          default: null,
        },
        blood_group: {
          type: String,
          default: "",
          trim: true
        },
        gender: {
          type: String,
          default: "",
        },
        profession: {
          type: String,
          default: "",
        },
        relationship: {
          type: String,
          default: "",
        },
        present_address: {
          country: {
            type: String,
            default: "",
            trim: true
          },
          city: {
            type: String,
            default: "",
            trim: true
          },
          state: {
            type: String,
            default: "",
            trim: true
          },
          postcode: {
            type: String,
            default: "",
            trim: true
          },
          address: {
            type: String,
            default: "",
            trim: true
          },
        },
        permanent_address: {
          country: {
            type: String,
            default: "",
            trim: true
          },
          city: {
            type: String,
            default: "",
            trim: true
          },
          state: {
            type: String,
            default: "",
            trim: true
          },
          postcode: {
            type: String,
            default: "",
            trim: true
          },
          address: {
            type: String,
            default: "",
            trim: true
          },
        },
        socialMedia: {
          facebook: {
            type: String,
            default: "",
            trim: true
          },
          github: {
            type: String,
            default: "",
            trim: true
          },
          twitter: {
            type: String,
            default: "",
            trim: true
          },
          linkedin: {
            type: String,
            default: "",
            trim: true
          },
        },
        isVerified: {
          type: Boolean,
          default: false,
        },
        verifyToken: {
          type: String,
          default: "",
        },
        verifyTokenExpires: {
          type: Date,
          default: null,
        },
        resetPasswordToken: {
          type: String,
          default: "",
        },
        resetPasswordTokenExpires: {
          type: Date,
          default: null,
        },
      },
      { timestamps: true }
    )
  );
