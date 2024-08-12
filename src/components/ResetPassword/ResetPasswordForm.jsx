import React from "react";

const ResetPasswordForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">New Password</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm New Password</label>
        <input type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-dark w-100">
        Recover Password
      </button>
    </form>
  );
};

export default ResetPasswordForm;
