"use client";
import { httpAxios } from "@/helper/httpAxios";
import React, { useEffect, useState } from "react";

const EditProfileForm = ({ id }) => {
  const [userdata, setUserdata] = useState({
    user: {
      name: "",
      email: "",
    },
    profile: {
      present_address: {
        country: "",
        city: "",
        state: "",
        postcode: "",
        address: "",
      },
      permanent_address: {
        country: "",
        city: "",
        state: "",
        postcode: "",
        address: "",
      },
      avatar: "",
      mobile: "",
      dob: null,
      blood_group: "",
      gender: "",
      profession: "",
      relationship: "",
    },
  });

  const {user, profile} = userdata;
  const {permanent_address, present_address} = profile;

  const handleChange = e => {
    console.log(e.target)
  }

  // useEffect(() => {
  //   httpAxios
  //     .get(`/api/users/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });

  //   const formdata  = new FormData();
  //   formdata.append("userdata", JSON.stringify(userdata));
  //   httpAxios.put(`/api/users/${id}`, formdata, {headers: {'Content-Type': 'multipart/formdata'}});
  // }, [id]);

  return (
    <form>
      <div className="row">
        <div className="mb-3 col-lg-6">
          <label className="form-label">Enter your name:</label>
          <input type="text" className="form-control" value={user.name} onChange={handleChange} />
        </div>
        <div className="mb-3 col-lg-6">
          <label className="form-label">Enter your email address:</label>
          <input type="text" className="form-control" value={user.email} onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-6">
          <label className="form-label">Enter your mobile/phone number:</label>
          <input type="text" className="form-control" value={profile.mobile} onChange={handleChange} />
        </div>
        <div className="mb-3 col-lg-6">
          <label className="form-label">Blood Group:</label>
          <input type="text" className="form-control" value={profile.blood_group} onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-6">
          <label className="form-label">Relationship Status:</label>
          <select className="form-select" value={profile.relationship} onChange={handleChange} >
            <option selected>--Choose relationship status--</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="engaged">Engaged</option>
          </select>
        </div>
        <div className="mb-3 col-lg-6">
          <label className="form-label">Choose your profession</label>
          <select className="form-select" value={profile.profession} onChange={handleChange}>
            <option selected>--SELECT OPTION--</option>
            <option value="1">Student</option>
            <option value="2">Freelancer</option>
            <option value="3">Job Holder</option>
            <option value="4">Other</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-6">
          <label className="form-label">Enter your date of birth</label>
          <input type="date" className="form-control" value={profile.dob} onChange={handleChange} />
        </div>
        <div className="mb-3 col-lg-6">
          <label className="form-label">Select your gender:</label>
          <div className="d-flex">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                checked
              />
              <label className="form-check-label" for="male">
                Male
              </label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                checked
              />
              <label className="form-check-label" for="female">
                Female
              </label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                checked
              />
              <label className="form-check-label" for="other">
                Other
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Present Address:</label>
        <div className='row'>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Country"
              value={present_address.country} 
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <input type="text" className="form-control mb-3" 
              placeholder="State" 
              value={present_address.state} 
              onChange={handleChange} 
            />
          </div>
          <div className="col-lg-6">
            <input type="text" 
              className="form-control mb-3" 
              placeholder="City" 
              value={present_address.city} 
              onChange={handleChange} 
            />
          </div>

          <div className="col-lg-6">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Postal code"
              value={present_address.postcode} 
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <textarea className="form-control mb-3" placeholder="House/Street address" value={present_address.address} 
              onChange={handleChange} style={{resize: "none"}} row={3}></textarea>
          </div>
        </div>
        
      </div>
      <div className="mb-3">
        <label className="form-label">Permanent Address:</label>
        <div className='row'>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Country"
              value={permanent_address.country} 
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <input type="text" className="form-control mb-3" 
              placeholder="State" 
              value={permanent_address.state} 
              onChange={handleChange} 
            />
          </div>
          <div className="col-lg-6">
            <input type="text" 
              className="form-control mb-3" 
              placeholder="City" 
              value={permanent_address.city} 
              onChange={handleChange} 
            />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Postal code"
              value={permanent_address.postcode} 
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <textarea className="form-control" placeholder="House/Street address" value={permanent_address.address} onChange={handleChange} style={{resize: "none"}} row={3}></textarea>
          </div>
          </div>
        </div>
      
      <div className="mb-3">
        <label className="form-label">Give your profile picture</label>
        <input type="file" className="form-control" onChange={handleChange} />
      </div>
      <button type="submit" className="submit_btn w-100">
        Save Changes
      </button>
    </form>
  );
};

export default EditProfileForm;
