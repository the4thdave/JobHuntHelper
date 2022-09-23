import * as React from 'react';
import { IJob, IReqPayload } from '../types/index';

interface JobFormProps {
  jobData: Map<number, IJob>;
  handleAdd: (payload: IReqPayload) => void;
  handleEdit: (payload: IReqPayload) => void;
  show: boolean;
  onHide: () => void;
  editMode: boolean;
  jobId: number;
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
      id: props.editMode ? props.jobId : nextId,
      company: company,
      position: jobTitle,
      city: city,
      state: locState,
      date: dateApplied,
    };

    props.editMode ? props.handleEdit(payload) : props.handleAdd(payload);
  };

  return (
    <form>
      <h4>First, enter the job description&apos;s URL:</h4>
      <div className='input-group mt-3 mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Job Description URL'
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
      <p className='text-center mt-4 fs-5'>
        Next, complete missing information:
      </p>
      <div className='form-floating mb-3'>
        <input
          type='text'
          className='form-control'
          id='floatingInput'
          aria-label='company'
          placeholder='company'
          onChange={e => setCompany(e.target.value)}
        />
        <label htmlFor='floatingInput'>Company</label>
      </div>

      <div className='form-floating mb-3'>
        <input
          type='text'
          className='form-control'
          id='floatingInput'
          aria-label='job-title'
          placeholder='Job Title'
          onChange={e => setJobTitle(e.target.value)}
        />
        <label htmlFor='floatingInput'>Job Title</label>
      </div>

      <div className='mb-3'>
        <div className='row g-2'>
          <div className='col-md'>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingInput'
                aria-label='city'
                placeholder='City'
                onChange={e => setCity(e.target.value)}
              />
              <label htmlFor='floatingInput'>City</label>
            </div>
          </div>
          <div className='col-md'>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingInput'
                aria-label='state'
                placeholder='State'
                onChange={e => setLocState(e.target.value)}
              />
              <label htmlFor='floatingInput'>State</label>
            </div>
          </div>
        </div>
      </div>

      <div className='form-floating mb-3'>
        <input
          type='text'
          className='form-control'
          id='floatingInput'
          aria-label='date-applied'
          placeholder='Date Applied'
          onChange={e => setDateApplied(e.target.value)}
        />
        <label htmlFor='floatingInput'>Date Applied</label>
      </div>
      <button
        onClick={() => {
          onSave();
          alert('Job info saved!');
          props.onHide();
        }}
        type='submit'
        className='btn btn-success'
      >
        Save Job Info
      </button>
    </form>
  );
};

export default JobForm;
