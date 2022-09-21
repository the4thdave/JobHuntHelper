import * as React from 'react';
import { IJob } from '../types/index';

interface TableRowProps {
  jobData: Map<number, IJob>;
  showEdit: () => void;
  handleDelete: (id: number) => void;
}

const TableRows = (props: TableRowProps): JSX.Element => {
  const tableRows = [];

  if (props.jobData.size === 0) {
    tableRows.push(
      <tr key='1'>
        <th>No job data available</th>
        <td>Click &quot;Add Job&quot; and add a new job!</td>
      </tr>,
    );
  } else {
    for (let i = 1; i <= props.jobData.size; i++) {
      tableRows.push(
        <tr key={i}>
          <th scope='row'>{i}</th>
          <td>{props.jobData?.get(i)?.company}</td>
          <td>{props.jobData?.get(i)?.position}</td>
          <td>{props.jobData?.get(i)?.city}</td>
          <td>{props.jobData?.get(i)?.state}</td>
          <td>{props.jobData?.get(i)?.date}</td>
          <td>
            <button className='btn btn-secondary btn-sm'>Edit</button>
            <button
              className='btn btn-danger btn-sm ms-2'
              onClick={() => props.handleDelete(i)}
            >
              Delete
            </button>
          </td>
        </tr>,
      );
    }
  }

  return <>{tableRows}</>;
};

export default TableRows;
