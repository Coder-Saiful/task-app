import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { Profile } from "@/models/profile";
import { User } from "@/models/user";

const { mongodbConnect } = require("@/config/mongodbConnect");

mongodbConnect();

// get profile information
export async function GET(request) {
  const { auth, response, decoded } = authenticated(request);

  if (auth) {
    try {
      const user = await User.findOne({ _id: decoded._id })
        .select("-password")
        .populate("profile");
      return SendResponse(user);
    } catch (error) {
      return SendResponse(
        { message: "Failed to load your profile information." },
        500
      );
    }
  } else {
    return response;
  }
}

// update profile information
export async function PUT(request) {
  const { auth, response, decoded } = authenticated(request);

  if (auth) {
    try {
      const formData = await request.formData();
      const requestData = {};

      for (let [field_name, value] of formData) {
        requestData[field_name] = value;
      }

      const user = await User.findByIdAndUpdate(
        decoded._id,
        {
          name: requestData.name,
          email: requestData.email,
          role: requestData.role,
        },
        { new: true }
      );

      const updatedProfile = await Profile.findByIdAndUpdate(
        user.profile,
        {
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
        },
        { new: true }
      );
      
      return SendResponse({
        message: "Your profile has been updated successfully.",
      });
    } catch (error) {
      return SendResponse(
        { message: "Failed to update your profile information." },
        500
      );
    }
  } else {
    return response;
  }
}
