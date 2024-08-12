import React from "react";

const ForgotPasswordForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Enter your password</label>
        <input type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-dark w-100">
        Send Email
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
