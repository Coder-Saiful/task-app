import React from "react";

const ForgotPasswordForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Enter your email</label>
        <input type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-dark w-100">
        Submit
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
