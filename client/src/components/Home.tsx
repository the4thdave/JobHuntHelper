import * as React from 'react';
import Stats from './Stats';
import AddJobModal from './AddJobModal';
import { IJob, IReqPayload } from '../types/index';
import axios, { AxiosResponse } from 'axios';
import { addJob, deleteJob, editJob } from '../utils/jobUtil';
import NoJobs from './NoJobs';

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
    } catch (err) {
      /* eslint-disable-next-line no-console */
      console.log(err);
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

  const handleEdit = (payload: IReqPayload) => {
    editJob(payload);
    setIsLoading(true);
  };

  const handleDelete = (id: number) => {
    deleteJob(id);
    setIsLoading(true);
  };

  return (
    <div>
      {isLoading && (
        <div className='text-center mt-10'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && jobData.size === 0 && (
        <NoJobs showAdd={() => setShowAdd(true)} />
      )}
      {!isLoading && jobData.size > 0 && (
        <Stats
          jobData={jobData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          showAdd={() => setShowAdd(true)}
        />
      )}
      {showAdd && (
        <AddJobModal
          jobData={jobData}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          show={showAdd}
          onHide={() => setShowAdd(false)}
          editMode={false}
          jobId={-1}
        />
      )}
    </div>
  );
};

export default Home;
