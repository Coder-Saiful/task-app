"use client";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Enter your email address</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-1">
          <label className="form-label">Enter your password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="text-end mb-3">
          <button
            className="border-0 bg-transparent forgot_pass_link"
            style={{ color: "var(--primaryColor)", fontSize: "14px" }}
          >
            Forgot Password
          </button>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
