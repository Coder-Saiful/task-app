"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { httpAxios } from "@/helper/httpAxios";
import { handlePassType } from "@/utils/handlePassType";

const ChangePasswordForm = () => {
  const [formdata, setFormdata] = useState({
    current_password: "",
    new_password: "",
    confirm_password: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormdata((preValue) => {
      return {
        ...preValue,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);

    httpAxios
      .post("/api/users/change-password", formdata)
      .then((response) => {
        setIsSubmit(false);
        setFormdata({
          current_password: "",
          new_password: "",
          confirm_password: ""
        });
        setErrors({});
        toast.success(response.data.message);
      })
      .catch((error) => {
        setIsSubmit(false);
        if (error.response) {
          if (error.response.data.errors) {
            setErrors(error.response.data.errors);
          }
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          }
        } else {
          setErrors({});
          toast.error("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Old Password</label>
        <input type="text" className={`form-control ${errors.current_password ? "is-invalid" : ""}`} name="current_password" value={formdata.current_password} onChange={handleChange} />
        {errors.current_password && (
          <div className="invalid-feedback">{errors.current_password}</div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">New Password</label>
        <input type="text" className={`form-control ${errors.new_password ? "is-invalid" : ""}`}  name="new_password" value={formdata.new_password} onChange={handleChange} />
        {errors.new_password && (
          <div className="invalid-feedback">{errors.new_password}</div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm New Password</label>
        <input type="password" className={`form-control ${errors.confirm_password ? "is-invalid" : ""}`}  name="confirm_password" value={formdata.confirm_password} onChange={handleChange} />
        {errors.confirm_password && (
          <div className="invalid-feedback">{errors.confirm_password}</div>
        )}
      </div>
      <button type="submit" className="submit_btn w-100" disabled={isSubmit}>
        {isSubmit ? "Changing..." : "Change"}
      </button>
    </form>
  );
};

export default ChangePasswordForm;
