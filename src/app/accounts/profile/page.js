import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { httpAxios } from "@/helper/httpAxios";
import React from "react";

export async function generateMetadata() {
  // httpAxios.get('/api/users/token-data')
  //   .then(response => {
  //     return {
  //       title: "hello"
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error.response.data)
  //   })
} 

const ProfilePage = () => {
  return (
    <ProfileInfo />
  );
};

export default ProfilePage;
