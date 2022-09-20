import * as React from 'react';
import Stats from './Stats';
import AddJob from './AddJob';
import { IJob, IReqPayload } from '../types/index';
import axios, { AxiosResponse } from 'axios';
import { addJob, deleteJob } from '../utils/jobUtil';

const Home = (): JSX.Element => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [jobData, setJobData] = React.useState<Map<number, IJob>>(new Map());
  const [showAdd, setShowAdd] = React.useState<boolean>(false);

  const updateJobData = (jobs: IJob[]) => {
    const newMap = new Map();
    for (const job of jobs) {
      const nextJobId = newMap.size + 1;
      newMap.set(nextJobId, job);
    }
    setJobData(newMap);
  };

  const getJobs = async () => {
    try {
      const response: AxiosResponse<IJob[]> = await axios.get(
        'http://localhost:3000/jobs',
      );
      updateJobData(response.data);
    } catch {
      throw 'An error has occurred';
    }
  };

  React.useEffect(() => {
    getJobs();
  }, [isLoading]);

  React.useEffect(() => {
    setIsLoading(false);
  }, [jobData]);

  const handleAdd = (payload: IReqPayload) => {
    addJob(payload);
    setIsLoading(true);
  };

  const handleDelete = (id: number) => {
    deleteJob(id);
    setIsLoading(true);
  };

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {!isLoading && !showAdd && (
        <Stats
          jobData={jobData}
          handleDelete={handleDelete}
          showAdd={() => setShowAdd(true)}
        />
      )}
      {showAdd && (
        <AddJob
          jobData={jobData}
          showStats={() => setShowAdd(false)}
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default Home;
