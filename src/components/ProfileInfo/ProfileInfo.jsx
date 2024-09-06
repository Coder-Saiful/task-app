"use client"

import React, { useEffect, useState } from 'react';
import { httpAxios } from "@/helper/httpAxios";
import Link from 'next/link';
import dateFormat from "dateformat";

const ProfileInfo = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        httpAxios.get('/api/users/profile')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }, []);
    if (user && user.updatedAt == user.profile.updatedAt) {
        console.log("profile data and user model data updated at same time")
    }

    return (
        <section className='my-4'>
            <div className='container'>
                {user && (
                    <>
                        <div className='row'>
                            <div className='col-lg-8 m-auto'>
                                <div className="profile_header pb-4" style={{ borderBottom: "1px solid grey" }}>
                                    <div className='user_profile_image'>
                                        {user.profile?.avatar ? (
                                            <img src={user.profile.avatar} alt="profile photo" />
                                        ) : (
                                            <img src="/nophoto.webp" alt={`${user.name}'s photo`} className="img-fluid rounded-circle" />
                                        )}
                                    </div>
                                    <div className="username_designation">
                                        <h2>{user.name}</h2>
                                        <h3>{user.email}</h3>
                                        {(user.profile?.profession) && (
                                            <h4>Profession: {user.profile.profession}</h4>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-8 m-auto'>
                                <div className="basic_info">
                                    <h4><u>Basic Information:</u></h4>
                                    {(user.profile.bio || user.profile.mobile || user.profile.dob || user.profile.blood_group || user.profile.gender || user.profile.relationship) ? (
                                        <>
                                            <p>Bio: {user.profile.bio}</p>
                                            <p>Mobile: {user.profile.mobile}</p>
                                            <p>Date of birth: {user.profile.dob}</p>
                                            <p>Blood Group: {user.profile.blood_group}</p>
                                            <p>Gender: {user.profile.gender}</p>
                                            <p>Relationship: {user.profile.relationship}</p>
                                        </>
                                    ) : (
                                        <h6 className="text-danger">You have not added basic information yet.</h6>
                                    )}
                                </div>
                                <div className="present_address">
                                    <h4><u>Present Address:</u></h4>
                                    {(user.profile.present_address.country || user.profile.present_address.state || user.profile.present_address.city || user.profile.present_address.postcode || user.profile.present_address.address) ? (
                                        <>
                                            <p>Country: {user.profile.present_address.country}</p>
                                            <p>State: {user.profile.present_address.state}</p>
                                            <p>City: {user.profile.present_address.city}</p>
                                            <p>Postcode: {user.profile.present_address.postcode}</p>
                                            <p>Address: {user.profile.present_address.address}</p>
                                        </>
                                    ) : (
                                        <h6 className="text-danger">You have not added present address yet.</h6>
                                    )}
                                </div>
                                <div className="permanent_address">
                                    <h4><u>Permanent Address:</u></h4>
                                    {(user.profile.permanent_address.country || user.profile.permanent_address.state || user.profile.permanent_address.city || user.profile.permanent_address.postcode || user.profile.permanent_address.address) ? (
                                        <>
                                            <p>Country: {user.profile.permanent_address.country}</p>
                                            <p>State: {user.profile.permanent_address.state}</p>
                                            <p>City: {user.profile.permanent_address.city}</p>
                                            <p>Postcode: {user.profile.permanent_address.postcode}</p>
                                            <p>Address: {user.profile.permanent_address.address}</p>
                                        </>
                                    ) : (
                                        <h6 className="text-danger">You have not added permanent address yet.</h6>
                                    )}
                                </div>
                                <div className='other_info'>
                                    <h4><u>Account Information</u></h4>
                                    <p>Joint At: {dateFormat(user.createdAt, "dddd, mmmm dd, yyyy 'at' HH:MM:ss TT")}</p>
                                    <p>Last Updated At: {dateFormat(user.updatedAt, "dddd, mmmm dd, yyyy 'at' HH:MM:ss TT")}</p>
                                    <div>Status: {user.profile.isVerified ? <span>Active</span> : <><span className="text-danger">Your account is not verified.</span><button className="account_verify_btn">Verify Now</button></>}</div>
                                </div>
                                <div className='user_profile_socialmedia'>
                                    <h4><u>Social Media:</u></h4>
                                    <div className="icons">
                                        {user.profile.socialMedia.facebook && (
                                            <Link href={user.profile.socialMedia.facebook} className="facebook"><i className="fa-brands fa-facebook"></i></Link>
                                        )}
                                        {user.profile.socialMedia.github && (
                                            <Link href={user.profile.socialMedia.github} className="github"><i className="fa-brands fa-github"></i></Link>
                                        )}
                                        {user.profile.socialMedia.twitter && (
                                            <Link href={user.profile.socialMedia.twitter} className="twitter"><i className="fa-brands fa-twitter"></i></Link>
                                        )}
                                        {user.profile.socialMedia.linkedin && (
                                            <Link href={user.profile.socialMedia.linkedin} className="linkedin"><i className="fa-brands fa-linkedin-in"></i></Link>
                                        )}
                                        {!user.profile.socialMedia.facebook && !user.profile.socialMedia.github && !user.profile.socialMedia.twitter && !user.profile.socialMedia.linkedin && (
                                            <h6 className="text-danger">You have not added social media links yet.</h6>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ProfileInfo;