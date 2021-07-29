import React from "react";
import JobForm from "./JobForm";

interface AddJobProps {
  handleWelcome: any;
  handleAdd: any;
  handleSelect: any;
  handleJob: any;
}

const AddJob = (props: AddJobProps) => {
  return (
    <div className="container">
      <h3 className="text-center mt-4">Add a Job</h3>
      <p className="text-center mt-4 fs-5">
        First, enter the job description's URL:
      </p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Job description URL"
          aria-label="Job description URL"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-success"
            type="button"
            id="button-addon2"
          >
            Submit
          </button>
        </div>
      </div>
      <JobForm
        handleWelcome={props.handleWelcome}
        handleAdd={props.handleAdd}
        handleSelect={props.handleSelect}
        handleJob={props.handleJob}
      />
    </div>
  );
};

export default AddJob;
