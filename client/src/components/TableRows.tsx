import * as React from 'react';
import { IJob } from '../types/index';

interface TableRowProps {
  jobData: Map<number, IJob>;
  showEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TableRows = (props: TableRowProps): JSX.Element => {
  const tableRows = [];

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
          <button
            className='btn btn-secondary btn-sm'
            onClick={() => props.showEdit(i)}
          >
            Edit
          </button>
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

  return <>{tableRows}</>;
};

export default TableRows;
