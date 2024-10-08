import React from "react";
import ProfileInfo from "@/components/User/ProfileInfo/ProfileInfo";
import { fetchTokenData } from "@/services/userService";
import { getToken } from "@/helper/getToken";

export async function generateMetadata  ({params}) {

  const {data} = await fetchTokenData(getToken());

  return {
    title: data ? data.name + "'s | Profile" : "Profile"
  }  
} 

const ProfilePage = () => { 
  return ( 
      <ProfileInfo /> 
  );
};

export default ProfilePage;
