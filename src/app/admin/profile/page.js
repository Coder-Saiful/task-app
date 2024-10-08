import ProfileInfo from "@/components/User/ProfileInfo/ProfileInfo";
import React from "react";
import { fetchTokenData } from "@/services/userService";
import { getToken } from "@/helper/getToken";

export async function generateMetadata  ({params}) {

  const {data} = await fetchTokenData(getToken());

  return {
    title: data ? data.name + "'s | Profile" : "Profile"
  }  
} 

const AdminProfile = async () => { 
  return (
    <ProfileInfo /> 
  );
};

export default AdminProfile;
