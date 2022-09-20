import * as React from 'react';
import JobForm from './JobForm';
import { IJob, IReqPayload } from '../types/index';

interface AddJobProps {
  jobData: Map<number, IJob>;
  showStats: () => void;
  handleAdd: (payload: IReqPayload) => void;
}

const AddJob = (props: AddJobProps): JSX.Element => {
  return (
    <div className='container'>
      <h3 className='text-center mt-4'>Add a Job</h3>
      <p className='text-center mt-4 fs-5'>
        First, enter the job description&apos;s URL:
      </p>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Job description URL'
          aria-label='Job description URL'
          aria-describedby='button-addon2'
        />
        <div className='input-group-append'>
          <button
            className='btn btn-outline-success'
            type='button'
            id='button-addon2'
          >
            Submit
          </button>
        </div>
      </div>
      <JobForm {...props} />
    </div>
  );
};

export default AddJob;
