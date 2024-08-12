"use client";
import React from "react";

const EditProfileForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Enter your name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter your email address</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter your address/location</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
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
      <div className="mb-3">
        <label className="form-label">Enter your date for birth</label>
        <input type="date" className="form-control" />
      </div>

      <div className="mb-3">
      <label className="form-label">Choose your profession</label>
        <select className="form-select">
          <option selected>--SELECT OPTION--</option>
          <option value="1">Student</option>
          <option value="2">Freelancer</option>
          <option value="3">Job Holder</option>
          <option value="4">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Give your profile picture</label>
        <input type="file" className="form-control" />
      </div>
      <button type="submit" className="btn btn-dark w-100">
        Save Changes
      </button>
    </form>
  );
};

export default EditProfileForm;
