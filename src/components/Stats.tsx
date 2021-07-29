import React from "react";
import Job from "../Job";

interface StatsProps {
  handleStats: any;
  map: Map<number, Job>;
}

const Stats = (props: StatsProps) => {
  return (
    <div className="container">
      <h3 className="text-center mt-4">Job Hunt Statistics</h3>
      <p className="text-center fs-4 mt-4">
        Here is a breakdown of your job hunt:
      </p>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company</th>
            <th scope="col">Job Title</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Apple</td>
            <td>Software Developer</td>
            <td>San Francisco</td>
            <td>California</td>
            <td>1/12/21</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
