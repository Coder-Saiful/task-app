"use client";
import React from "react";

const ChangePasswordForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Old Password</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">New Password</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm New Password</label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="submit_btn w-100">
        Change
      </button>
    </form>
  );
};

export default ChangePasswordForm;
