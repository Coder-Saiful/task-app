import ProfileInfo from "@/components/User/ProfileInfo/ProfileInfo";
import React from "react";
import { fetchProfile, fetchTokenData } from "@/services/userService";
import { getToken } from "@/helper/getToken";

export async function generateMetadata  ({params}) {

  const {data} = await fetchTokenData(getToken());

  return {
    title: data ? data.name + "'s | Profile" : "Profile"
  }  
} 

const AdminProfile = async () => {
  const userprofile = await fetchProfile(getToken());
  return (
    <>
      {userprofile.data && <ProfileInfo userprofile={userprofile.data}  />}
      {userprofile.error && <h2>{userprofile.error.message}</h2>}
    </>
  );
};

export default AdminProfile;
