"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from 'next/navigation';
import { httpAxios } from "@/helper/httpAxios";

const LoginForm = () => {
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const redirectUrl = useSearchParams().get("next");

  const handleChange = (e) => {
    setUserdata((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    httpAxios
      .post("http://localhost:3000/api/users/login", userdata)
      .then((response) => {
        setIsLoading(false);
        setErrors({});
        setUserdata({
          email: "",
          password: "",
        });
        toast.success(response.data.message);
        
        setTimeout(() => {
          if (redirectUrl) {
              router.push(`/${redirectUrl}`);
          } else {
            switch(response.data.user.role) {
              case 'user':
                router.push(`/accounts/profile`);
                break;
              case 'manager':
                router.push('/admin/dashboard');
                break;
              case 'admin':
                router.push('/admin/dashboard');
                break;
              default:
                router.push('/');
            } 
          }
        }, 1000);
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response) {
          if (error.response.data.errors) {
            setErrors(error.response.data.errors);
          } else {
            setErrors({});
          }
          if (error.response.data.invalid_credential) {
            setErrors((preValue) => ({
              ...preValue,
              password: error.response.data.invalid_credential
            }));
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
        <div className="mb-1">
          <label className="form-label">Enter your password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={userdata.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
          </div>
        <div className="text-end mb-3">
          <Link
            href={`/accounts/forgot-password`}
            className="border-0 bg-transparent forgot_pass_link"
            style={{ color: "var(--primaryColor)", fontSize: "14px" }}
          >
            Forgot Password
          </Link>
        </div>
        <button type="submit" className="btn btn-dark w-100" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
  );
};

export default LoginForm;
