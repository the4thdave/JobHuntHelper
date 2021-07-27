import React from "react";

interface AddJobProps {
  handleWelcome: any;
  handleAddScreen: any;
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
      <p className="text-center mt-4 fs-5">
        Next, complete missing information:
      </p>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Company
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="..."
          aria-label="company"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Job Title
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="..."
          aria-label="job title"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Location</span>
        </div>
        <input
          type="text"
          placeholder="City"
          aria-label="city"
          className="form-control"
        />
        <input
          type="text"
          placeholder="State"
          aria-label="state"
          className="form-control"
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Date Available
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="..."
          aria-label="date available"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Date Applied
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="..."
          aria-label="date applied"
          aria-describedby="basic-addon1"
        />
      </div>

      <button
        onClick={() => {
          props.handleWelcome();
          props.handleAddScreen();
        }}
        type="button"
        className="btn btn-secondary me-2"
      >
        Go Back
      </button>

      <button type="button" className="btn btn-success">
        Save Job Info
      </button>
    </div>
  );
};

export default AddJob;
