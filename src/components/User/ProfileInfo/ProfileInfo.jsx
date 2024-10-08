"use client"

import Link from 'next/link';
import dateFormat from "dateformat";
import React, { useState, useEffect } from 'react';
import { httpAxios } from "@/helper/httpAxios";
import Spinner from "@/components/LoadingAnimation/Spinner";

const ProfileInfo = () => {
    const [userprofile, setUserprofile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        httpAxios.get('/api/users/profile')
            .then(response => {
                setLoading(false);
                setError(null);
                setUserprofile(response.data);
            })
            .catch(error => {
                setLoading(false);
                if (error.response) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong. Please try again later or refresh the web/app");
                }
            });
    }, []);

    return (
        // <section className='my-4'>
        //     <div className='container'>
        //                 <div className='row'>
        //                     <div className='col-lg-8 m-auto'>
        //                         <div className="profile_header pb-4" style={{ borderBottom: "1px solid grey" }}>
        //                             <div className='user_profile_image'>
        //                                 {userprofile.profile?.avatar ? (
        //                                     <img src={userprofile.profile.avatar} alt="profile photo" />
        //                                 ) : (
        //                                     <img src="/nophoto.webp" alt={`${userprofile.name}'s photo`} className="img-fluid rounded-circle" />
        //                                 )}
        //                             </div>
        //                             <div className="username_designation">
        //                                 <h2>{userprofile.name}</h2>
        //                                 <h3>{userprofile.email}</h3>
        //                                 {(userprofile.profile?.profession) && (
        //                                     <h4>Profession: {userprofile.profile.profession}</h4>
        //                                 )}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="row">
        //                     <div className='col-lg-8 m-auto'>
        //                         {/* basic information */}
        //                         <div className="basic_info">
        //                             <h4><u>Basic Information:</u></h4>
        //                             {(userprofile.profile.bio || userprofile.profile.mobile || userprofile.profile.dob || userprofile.profile.blood_group || userprofile.profile.gender || userprofile.profile.relationship) ? (
        //                                 <>
        //                                     <p>Bio: {userprofile.profile.bio}</p>
        //                                     <p>Mobile: {userprofile.profile.mobile}</p>
        //                                     <p>Date of birth: {userprofile.profile.dob}</p>
        //                                     <p>Blood Group: {userprofile.profile.blood_group}</p>
        //                                     <p>Gender: {userprofile.profile.gender}</p>
        //                                     <p>Relationship: {userprofile.profile.relationship}</p>
        //                                 </>
        //                             ) : (
        //                                 <h6 className="text-danger">You have not added basic information yet.</h6>
        //                             )}
        //                         </div>

        //                         {/* present address */}
        //                         <div className="present_address">
        //                             <h4><u>Present Address:</u></h4>
        //                             {(userprofile.profile.present_address.country || userprofile.profile.present_address.state || userprofile.profile.present_address.city || userprofile.profile.present_address.postcode || userprofile.profile.present_address.address) ? (
        //                                 <>
        //                                     <p>Country: {userprofile.profile.present_address.country}</p>
        //                                     <p>State: {userprofile.profile.present_address.state}</p>
        //                                     <p>City: {userprofile.profile.present_address.city}</p>
        //                                     <p>Postcode: {userprofile.profile.present_address.postcode}</p>
        //                                     <p>Address: {userprofile.profile.present_address.address}</p>
        //                                 </>
        //                             ) : (
        //                                 <h6 className="text-danger">You have not added present address yet.</h6>
        //                             )}
        //                         </div>

        //                         {/* permanent address */}
        //                         <div className="permanent_address">
        //                             <h4><u>Permanent Address:</u></h4>
        //                             {(userprofile.profile.permanent_address.country || userprofile.profile.permanent_address.state || userprofile.profile.permanent_address.city || userprofile.profile.permanent_address.postcode || userprofile.profile.permanent_address.address) ? (
        //                                 <>
        //                                     <p>Country: {userprofile.profile.permanent_address.country}</p>
        //                                     <p>State: {userprofile.profile.permanent_address.state}</p>
        //                                     <p>City: {userprofile.profile.permanent_address.city}</p>
        //                                     <p>Postcode: {userprofile.profile.permanent_address.postcode}</p>
        //                                     <p>Address: {userprofile.profile.permanent_address.address}</p>
        //                                 </>
        //                             ) : (
        //                                 <h6 className="text-danger">You have not added permanent address yet.</h6>
        //                             )}
        //                         </div>

        //                         {/* account information */}
        //                         <div className='account_info'>
        //                             <h4><u>Account Information</u></h4>
        //                             <p>Joint At: {dateFormat(userprofile.createdAt, "dddd, mmmm dd, yyyy 'at' h:MM:ss tt")}</p>
        //                             <p>Last Updated At: {dateFormat(userprofile.updatedAt, "dddd, mmmm dd, yyyy 'at' h:MM:ss tt")}</p>
        //                             <div>Status: {userprofile.profile.isVerified ? <span>Active</span> : <><span className="text-danger">Your account is not verified.</span><button className="account_verify_btn">Verify Now</button></>}</div>
        //                             <div>Would you like to update your profile? <Link href={userprofile.role == "user" ? "/accounts/profile/edit" : "/admin/profile/edit"} className='update_profile_btn'>Click Here</Link></div>
        //                         </div>

        //                         {/* social media */}
        //                         <div className='user_profile_socialmedia'>
        //                             <h4><u>Social Media:</u></h4>
        //                             <div className="icons">
        //                                 {userprofile.profile.socialMedia.facebook && (
        //                                     <Link href={userprofile.profile.socialMedia.facebook} className="facebook"><i className="fa-brands fa-facebook"></i></Link>
        //                                 )}
        //                                 {userprofile.profile.socialMedia.github && (
        //                                     <Link href={userprofile.profile.socialMedia.github} className="github"><i className="fa-brands fa-github"></i></Link>
        //                                 )}
        //                                 {userprofile.profile.socialMedia.twitter && (
        //                                     <Link href={userprofile.profile.socialMedia.twitter} className="twitter"><i className="fa-brands fa-twitter"></i></Link>
        //                                 )}
        //                                 {userprofile.profile.socialMedia.linkedin && (
        //                                     <Link href={userprofile.profile.socialMedia.linkedin} className="linkedin"><i className="fa-brands fa-linkedin-in"></i></Link>
        //                                 )}
        //                                 {!userprofile.profile.socialMedia.facebook && !userprofile.profile.socialMedia.github && !userprofile.profile.socialMedia.twitter && !userprofile.profile.socialMedia.linkedin && (
        //                                     <h6 className="text-danger">You have not added social media links yet.</h6>
        //                                 )}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //     </div>
        // </section>
        <>
            {userprofile?.name && !error && !loading && (
                <section className='my-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8 m-auto'>
                                <div className="profile_header pb-4" style={{ borderBottom: "1px solid grey" }}>
                                    <div className='user_profile_image'>
                                        {userprofile.profile?.avatar ? (
                                            <img src={userprofile.profile.avatar} alt="profile photo" />
                                        ) : (
                                            <img src="/nophoto.webp" alt={`${userprofile.name}'s photo`} className="img-fluid rounded-circle" />
                                        )}
                                    </div>
                                    <div className="username_designation">
                                        <h2>Name: {userprofile.name}</h2>
                                        <h4>Email: {userprofile.email}</h4>
                                        {(userprofile.profile?.profession) && (
                                            <h4>Profession: {userprofile.profile.profession}</h4>
                                        )}
                                        <h4>Profession: {userprofile.profile.profession}</h4>

                                        <h4 style={{ marginBottom: 0 }}>Username: {userprofile.profile.username}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-8 m-auto'>
                                {/* basic information */}
                                <div className="basic_info">
                                    <h4><u>Basic Information:</u></h4>
                                    {(userprofile.profile.bio || userprofile.profile.mobile || userprofile.profile.dob || userprofile.profile.blood_group || userprofile.profile.gender || userprofile.profile.relationship) ? (
                                        <>
                                            <p>Bio: {userprofile.profile.bio}</p>
                                            <p>Mobile: {userprofile.profile.mobile}</p>
                                            <p>Date of birth: {userprofile.profile.dob}</p>
                                            <p>Blood Group: {userprofile.profile.blood_group}</p>
                                            <p>Gender: {userprofile.profile.gender}</p>
                                            <p>Relationship: {userprofile.profile.relationship}</p>
                                        </>
                                    ) : (
                                        <h6 className="text-danger">You have not added basic information yet.</h6>
                                    )}
                                </div>

                                {/* present address */}
                                <div className="present_address">
                                    <h4><u>Present Address:</u></h4>
                                    {(userprofile.profile.present_address.country || userprofile.profile.present_address.state || userprofile.profile.present_address.city || userprofile.profile.present_address.postcode || userprofile.profile.present_address.address) ? (
                                        <>
                                            <p>Country: {userprofile.profile.present_address.country}</p>
                                            <p>State: {userprofile.profile.present_address.state}</p>
                                            <p>City: {userprofile.profile.present_address.city}</p>
                                            <p>Postcode: {userprofile.profile.present_address.postcode}</p>
                                            <p>Address: {userprofile.profile.present_address.address}</p>
                                        </>
                                    ) : (
                                        <h6 className="text-danger">You have not added present address yet.</h6>
                                    )}
                                </div>

                                {/* permanent address */}
                                <div className="permanent_address">
                                    <h4><u>Permanent Address:</u></h4>
                                    {(userprofile.profile.permanent_address.country || userprofile.profile.permanent_address.state || userprofile.profile.permanent_address.city || userprofile.profile.permanent_address.postcode || userprofile.profile.permanent_address.address) ? (
                                        <>
                                            <p>Country: {userprofile.profile.permanent_address.country}</p>
                                            <p>State: {userprofile.profile.permanent_address.state}</p>
                                            <p>City: {userprofile.profile.permanent_address.city}</p>
                                            <p>Postcode: {userprofile.profile.permanent_address.postcode}</p>
                                            <p>Address: {userprofile.profile.permanent_address.address}</p>
                                        </>
                                    ) : (
                                        <h6 className="text-danger">You have not added permanent address yet.</h6>
                                    )}
                                </div>

                                {/* account information */}
                                <div className='account_info'>
                                    <h4><u>Account Information</u></h4>
                                    <p>Joint At: {dateFormat(userprofile.createdAt, "dddd, mmmm dd, yyyy 'at' h:MM:ss tt")}</p>
                                    <p>Last Updated At: {dateFormat(userprofile.updatedAt, "dddd, mmmm dd, yyyy 'at' h:MM:ss tt")}</p>
                                    <div>Status: {userprofile.profile.isVerified ? <span>Active</span> : <><span className="text-danger">Your account is not verified.</span><button className="account_verify_btn">Verify Now</button></>}</div>
                                    <div>Would you like to update your profile? <Link href={userprofile.role == "user" ? "/accounts/profile/edit" : "/admin/profile/edit"} className='update_profile_btn'>Click Here</Link></div>
                                </div>

                                {/* social media */}
                                <div className='user_profile_socialmedia'>
                                    <h4><u>Social Media:</u></h4>
                                    <div className="icons">
                                        {userprofile.profile.socialMedia.facebook && (
                                            <Link href={userprofile.profile.socialMedia.facebook} className="facebook"><i className="fa-brands fa-facebook"></i></Link>
                                        )}
                                        {userprofile.profile.socialMedia.github && (
                                            <Link href={userprofile.profile.socialMedia.github} className="github"><i className="fa-brands fa-github"></i></Link>
                                        )}
                                        {userprofile.profile.socialMedia.twitter && (
                                            <Link href={userprofile.profile.socialMedia.twitter} className="twitter"><i className="fa-brands fa-twitter"></i></Link>
                                        )}
                                        {userprofile.profile.socialMedia.linkedin && (
                                            <Link href={userprofile.profile.socialMedia.linkedin} className="linkedin"><i className="fa-brands fa-linkedin-in"></i></Link>
                                        )}
                                        {!userprofile.profile.socialMedia.facebook && !userprofile.profile.socialMedia.github && !userprofile.profile.socialMedia.twitter && !userprofile.profile.socialMedia.linkedin && (
                                            <h6 className="text-danger">You have not added social media links yet.</h6>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {loading && !error && (
                <Spinner />
            )}
            {error && (
                <h5 className="text-center mb-0">{error}</h5>
            )}
        </>
    );
};

export default ProfileInfo;