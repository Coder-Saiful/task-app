"use client";
import React from "react";

const EditTaskForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Choose Task Category</label>
        <select className="form-select">
          <option selected>--SELECT OPTION--</option>
          <option value="1">Politics</option>
          <option value="2">Sports</option>
          <option value="3">Entertainment</option>
          <option value="4">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" rows="4"></textarea>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="publish" />
        <label className="form-check-label" htmlFor="publish">
          Publish
        </label>
      </div>
      <button type="submit" className="submit_btn w-100">
        Edit
      </button>
    </form>
  );
};

export default EditTaskForm;
