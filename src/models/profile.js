const { Schema, model, models } = require("mongoose");

const profileSchema = new Schema(
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
    mobile: {
      type: String,
      default: "",
    },
    dob: {
      type: Date,
      default: "",
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
        default: ""
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
  },
  { timestamps: true }
);

export const Profile = models.Profile || model("Profile", profileSchema);
