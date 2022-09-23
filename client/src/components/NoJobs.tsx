import * as React from 'react';

interface NoJobsProps {
  showAdd: () => void;
}

const NoJobs = (props: NoJobsProps): JSX.Element => {
  return (
    <div className='container'>
      <h3 className='text-center mt-4'>No Jobs Found</h3>
      <p className='text-center fs-4 mt-4'>Please add a job</p>
      <div className='text-center'>
        <button className='btn btn-success' onClick={props.showAdd}>
          Add Job
        </button>
      </div>
    </div>
  );
};

export default NoJobs;
