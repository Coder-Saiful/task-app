import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { Profile } from "@/models/profile";
import { User } from "@/models/user";

const { mongodbConnect } = require("@/config/mongodbConnect");

mongodbConnect();

// get user details
export async function GET(request, { params: { id } }) {
  const { auth, response } = authenticated(request, ["manager", "admin"]);
  if (auth) {
    try {
      const user = await User.findById(id)
        .select("-password")
        .populate("profile");
      if (!sponsuser) {
        return SendRee({ message: "404 Not Found." }, 404);
      }
      return SendResponse(user);
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse({ message: "Failed to load user details." }, 500);
    }
  } else {
    return response;
  }
}

// update user details
export async function PUT(request, { params: { id } }) {
  const { auth, response } = authenticated(request, ["admin"]);
  if (auth) {
    try {
      const user = await User.findById(id)
        .select("-password");
      if (!user) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }

      const formData = await request.formData();
      const requestData = {};

      for (let [field_name, value] of formData) {
        requestData[field_name] = value;
      }

      user.name = requestData.name;
      user.email = requestData.email
      user.role = requestData.role;

      await user.save();

      const updatedProfile = await Profile.findOneAndUpdate(
        {
          user: user._id,
        },
        {
          $set: {
            mobile: requestData.mobile,
            dob: requestData.dob,
            blood_group: requestData.blood_group,
            gender: requestData.gender,
            profession: requestData.profession,
            relationship: requestData.relationship,
            avatar: requestData.avatar?.name,
            present_address: {
              country: requestData.present_country,
              state: requestData.present_state,
              city: requestData.present_city,
              postcode: requestData.present_postcode,
              address: requestData.present_house_address,
            },
            permanent_address: {
              country: requestData.permanent_country,
              state: requestData.permanent_state,
              city: requestData.permanent_city,
              postcode: requestData.permanent_postcode,
              address: requestData.permanent_house_address,
            },
          }
        },
        { new: true }
      );

      return SendResponse({ message: "User has been updated successfully." });
    } catch (error) {
      console.log(error.message);
      if (error.name == "CastError") {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse({ message: "Failed to update user details." }, 500);
    }
  } else {
    return response;
  }
}

// delete an user
export async function DELETE(request, { params: { id } }) {
  const { auth, response } = authenticated(request, ["admin"]);
  if (auth) {
    try {
      const user = await User.findById(id).select("-password");
      if (!user) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      await User.deleteOne({ _id: id });
      await Profile.deleteOne({ user: user._id });
      return SendResponse({ message: "User has been deleted successfully." });
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse({ message: "Failed to delete user details." }, 500);
    }
  } else {
    return response;
  }
}
