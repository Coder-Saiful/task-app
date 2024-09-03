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
        avatar: {
          type: String,
          default: "",
        },
        cover_pic: {
          type: String,
          default: "",
        },
        mobile: {
          type: String,
          default: "",
        },
        dob: {
          type: Date,
          default: null,
        },
        blood_group: {
          type: String,
          default: "",
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
          },
          city: {
            type: String,
            default: "",
          },
          state: {
            type: String,
            default: "",
          },
          postcode: {
            type: String,
            default: "",
          },
          address: {
            type: String,
            default: "",
          },
        },
        permanent_address: {
          country: {
            type: String,
            default: "",
          },
          city: {
            type: String,
            default: "",
          },
          state: {
            type: String,
            default: "",
          },
          postcode: {
            type: String,
            default: "",
          },
          address: {
            type: String,
            default: "",
          },
        },
        facebookProfileLink: {
          type: String,
          default: ""
        },
        githubProfileLink: {
          type: String,
          default: ""
        },
        twitterProfileLink: {
          type: String,
          default: ""
        },
        linkedinProfileLink: {
          type: String,
          default: ""
        },
        isVerified: {
          type: Boolean,
          default: false,
        },
        verifyToken: {
          type: String,
          default: ""
        },
        verifyTokenExpires: {
          type: Date,
          default: null
        },
        resetPasswordToken: {
          type: String,
          default: ""
        },
        resetPasswordTokenExpires: {
          type: Date,
          default: null
        }
      },
      { timestamps: true }
    )
  );
