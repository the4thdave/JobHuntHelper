import * as React from 'react';
import Job from '../Job';
import TableRows from './TableRows';

interface StatsProps {
  handleStats: () => void;
  map: Map<number, Job>;
}

const Stats = (props: StatsProps): JSX.Element => {
  return (
    <div className='container'>
      <h3 className='text-center mt-4'>Job Hunt Statistics</h3>
      <p className='text-center fs-4 mt-4'>Here is a breakdown of your job hunt:</p>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Company</th>
            <th scope='col'>Job Title</th>
            <th scope='col'>City</th>
            <th scope='col'>State</th>
            <th scope='col'>Date Applied</th>
          </tr>
        </thead>
        <tbody>
          <TableRows map={props.map} />
        </tbody>
      </table>
      <button onClick={() => props.handleStats()} type='button' className='btn btn-secondary me-2'>
        Go Back
      </button>
    </div>
  );
};

export default Stats;
