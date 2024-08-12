"use client";
import React from "react";

const SignupForm = () => {
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
        <label className="form-label">Enter your password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="agreed" />
        <label className="form-check-label" htmlFor="agreed">
          Accept our terms and conditions
        </label>
      </div>
      <button type="submit" className="btn btn-dark w-100">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
