import * as React from 'react';
import TableRows from './TableRows';
import { IJob } from '../types/index';

interface StatsProps {
  jobData: Map<number, IJob>;
  showEdit: () => void;
  handleDelete: (id: number) => void;
  showAdd: () => void;
}

const Stats = (props: StatsProps): JSX.Element => {
  return (
    <div className='container'>
      <h3 className='text-center mt-4'>Job Hunt Statistics</h3>
      <div>
        <p className='text-center fs-4 mt-4'>
          Here is a breakdown of your job hunt:
        </p>

        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Company</th>
              <th scope='col'>Job Title</th>
              <th scope='col'>City</th>
              <th scope='col'>State</th>
              <th scope='col'>Date Applied</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            <TableRows
              jobData={props.jobData}
              showEdit={props.showEdit}
              handleDelete={props.handleDelete}
            />
          </tbody>
        </table>
        <button className='btn btn-success' onClick={props.showAdd}>
          Add Job
        </button>
      </div>
    </div>
  );
};

export default Stats;
