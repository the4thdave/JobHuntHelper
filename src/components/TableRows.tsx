import React from 'react';
import Job from '../Job';

interface TableRowProps {
  map: Map<number, Job>;
}

const TableRows = (props: TableRowProps) => {
  const tableRows = [];

  if (props.map.size === 0) {
    tableRows.push(
      <tr key='1'>
        <th>No job data available</th>
        <td>Click &quot;Go Back&quot; and try adding a new job!</td>
      </tr>,
    );
  } else {
    for (let i = 1; i <= props.map.size; i++) {
      tableRows.push(
        <tr key={i}>
          <th scope='row'>{i}</th>
          <td>{props.map?.get(i)?.company}</td>
          <td>{props.map?.get(i)?.jobTitle}</td>
          <td>{props.map?.get(i)?.city}</td>
          <td>{props.map?.get(i)?.state}</td>
          <td>{props.map?.get(i)?.dateApplied}</td>
        </tr>,
      );
    }
  }

  return <>{tableRows}</>;
};

export default TableRows;
