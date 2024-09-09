import React from "react";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { fetchProfile, fetchTokenData } from "@/services/userService";
import { getToken } from "@/helper/getToken";

export async function generateMetadata  ({params}) {

  const {data} = await fetchTokenData(getToken());

  return {
    title: data ? data.name + "'s | Profile" : "Profile"
  }  
} 

const ProfilePage = async () => {
  const userprofile = await fetchProfile(getToken());
  return (
    <>
      {userprofile.data && <ProfileInfo userprofile={userprofile.data}  />}
      {userprofile.error && <h2>{userprofile.error.message}</h2>}
    </>
  );
};

export default ProfilePage;
