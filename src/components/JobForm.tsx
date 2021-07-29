import React, { useState } from "react";

interface JobFormProps {
  handleWelcome: any;
  handleAdd: any;
  handleSelect: any;
  handleJob: any;
}

const JobForm = (props: JobFormProps) => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");
  const [locState, setLocState] = useState("");
  const [strDateApplied, setDateApplied] = useState("");

  return (
    <form>
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
          onChange={(e) => setCompany(e.target.value)}
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
          onChange={(e) => setJobTitle(e.target.value)}
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
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          aria-label="state"
          className="form-control"
          onChange={(e) => setLocState(e.target.value)}
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
          onChange={(e) => setDateApplied(e.target.value)}
        />
      </div>

      <button
        onClick={() => {
          props.handleWelcome();
          props.handleAdd();
        }}
        type="button"
        className="btn btn-secondary me-2"
      >
        Go Back
      </button>

      <button
        onClick={() => {
          props.handleJob(company, jobTitle, city, locState, strDateApplied);
          props.handleSelect();
        }}
        type="button"
        className="btn btn-success"
      >
        Save Job Info
      </button>
    </form>
  );
};

export default JobForm;
