import {Schema, model, models} from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:  {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    agreed: {
        type: Boolean,
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "manager", "admin"],
        default: 'user'
    },
    isBanned: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

export const User = models.User || model("User", userSchema);