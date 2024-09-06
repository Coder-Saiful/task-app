import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { httpAxios } from "@/helper/httpAxios";
import { getToken } from "@/helper/getToken";
import React from "react";

export async function generateMetadata  ({params}) {
  const token = getToken();

  const response = await httpAxios.get("/api/users/token-data", {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  return {
    title: response.data.name + "'s | Profile"
  }  
} 

const ProfilePage = () => {
  return (
    <ProfileInfo />
  );
};

export default ProfilePage;
