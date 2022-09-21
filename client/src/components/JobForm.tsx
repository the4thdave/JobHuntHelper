import * as React from 'react';
import { IJob, IReqPayload } from '../types/index';

interface JobFormProps {
  jobData: Map<number, IJob>;
  showStats: () => void;
  handleAdd: (payload: IReqPayload) => void;
}

const JobForm = (props: JobFormProps): JSX.Element => {
  const [company, setCompany] = React.useState<string>('');
  const [jobTitle, setJobTitle] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');
  const [locState, setLocState] = React.useState<string>('');
  const [dateApplied, setDateApplied] = React.useState<string>('');

  const onSave = () => {
    const nextId = props.jobData.size + 1;

    const payload: IReqPayload = {
      id: nextId,
      company: company,
      position: jobTitle,
      city: city,
      state: locState,
      date: dateApplied,
    };
    props.handleAdd(payload);
  };

  return (
    <form>
      <p className='text-center mt-4 fs-5'>
        Next, complete missing information:
      </p>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            Company
          </span>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='...'
          aria-label='company'
          aria-describedby='basic-addon1'
          onChange={e => setCompany(e.target.value)}
        />
      </div>

      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            Job Title
          </span>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='...'
          aria-label='job title'
          aria-describedby='basic-addon1'
          onChange={e => setJobTitle(e.target.value)}
        />
      </div>

      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>Location</span>
        </div>
        <input
          type='text'
          placeholder='City'
          aria-label='city'
          className='form-control'
          onChange={e => setCity(e.target.value)}
        />
        <input
          type='text'
          placeholder='State'
          aria-label='state'
          className='form-control'
          onChange={e => setLocState(e.target.value)}
        />
      </div>

      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            Date Applied
          </span>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='MM/DD/YYYY'
          aria-label='date applied'
          aria-describedby='basic-addon1'
          onChange={e => setDateApplied(e.target.value)}
        />
      </div>

      <button
        onClick={props.showStats}
        type='button'
        className='btn btn-secondary me-2'
      >
        Go Back
      </button>

      <button
        onClick={() => {
          onSave();
          alert('Job info saved');
          props.showStats();
        }}
        type='button'
        className='btn btn-success'
      >
        Save Job Info
      </button>
    </form>
  );
};

export default JobForm;
