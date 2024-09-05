"use client"

import React, {useEffect, useState} from 'react';
import { httpAxios } from "@/helper/httpAxios";

const ProfileInfo = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        httpAxios.get('/api/users/profile')
    .then(response => {
        setUser(response.data);
    })
    .catch(error => {
      console.log(error.response.data)
    })
    }, []);

    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2>Profile Info</h2>
                        {JSON.stringify(user)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileInfo;