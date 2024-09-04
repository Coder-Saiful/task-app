"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { httpAxios } from "@/helper/httpAxios";
import { handlePassType } from "@/utils/handlePassType";

const SignupForm = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setUserdata((preValue) => {
      return {
        ...preValue,
        [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    httpAxios
      .post("/api/users/register", userdata)
      .then((response) => {
        setIsLoading(false);
        setUserdata({
          name: "",
          email: "",
          password: "",
          confirm_password: "",
          agreed: false,
        });
        setErrors({});
        toast.success(response.data.message, {autoClose: 2500});

        setTimeout(() => {
          router.push('/accounts/login')
        }, 1000);
      })
      .catch((error) => {
        setIsLoading(false);
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
        <label className="form-label">Enter your name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          name="name"
          value={userdata.name}
          onChange={handleChange}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Enter your email address</label>
        <input
          type="text"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          name="email"
          value={userdata.email}
          onChange={handleChange}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
      </div>

      <div className="mb-3 position-relative">
        <label className="form-label">Enter your password</label>
        <input
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          name="password"
          value={userdata.password}
          onChange={handleChange}
        />
      
        <i className="fa-regular fa-eye pass_show_hide" onClick={handlePassType} style={{color: errors.password ? "#bdbdbd" : "#bdbdbd"}}></i>
  
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>

      <div className="mb-3 position-relative">
        <label className="form-label">Enter your confirm password</label>
        <input
          type="password"
          className={`form-control ${
            errors.confirm_password ? "is-invalid" : ""
          }`}
          name="confirm_password"
          value={userdata.confirm_password}
          onChange={handleChange}
        />
        <i className="fa-regular fa-eye pass_show_hide" onClick={handlePassType} style={{color: errors.password ? "#bdbdbd" : "#bdbdbd"}}></i>
        {errors.confirm_password && (
          <div className="invalid-feedback">{errors.confirm_password}</div>
        )}
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className={`form-check-input`}
          id="agreed"
          checked={userdata.agreed}
          name="agreed"
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="agreed">
          Accept our terms and conditions
        </label>
        {errors.agreed && (
          <div className="invalid-feedback d-block" style={{marginTop: "-1px", marginLeft: "-24px"}}>{errors.agreed}</div>
        )}
      </div>

      <button type="submit" className="submit_btn w-100" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default SignupForm;
