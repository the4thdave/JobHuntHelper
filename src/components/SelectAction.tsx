import * as React from 'react';

interface SelectActionProps {
  handleSelect: () => void;
  handleStats: () => void;
}

const SelectAction = (props: SelectActionProps): JSX.Element => {
  return (
    <div className='container'>
      <h3 className='text-center mt-4'>Select an Action</h3>
      <p className='text-center fs-4 mt-4'>What would you like to do?</p>
      <div className='text-center mt-4'>
        <button onClick={() => props.handleSelect()} className='btn btn-primary me-3' type='button'>
          Add a new job
        </button>
        <button onClick={() => props.handleStats()} className='btn btn-primary' type='button'>
          Show job hunt statistics
        </button>
      </div>
    </div>
  );
};

export default SelectAction;
