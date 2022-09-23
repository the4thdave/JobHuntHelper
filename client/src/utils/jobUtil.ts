import axios from 'axios';
import { IReqPayload } from '../types/index';

const addJob = async (payload: IReqPayload) => {
  try {
    await axios.post('http://localhost:3000/jobs', payload);
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.log(err);
  }
};

const editJob = async (payload: IReqPayload) => {
  const { id } = payload;
  try {
    axios.put(`http://localhost:3000/jobs/${id}`, payload);
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.log(err);
  }
};

const deleteJob = async (id: number) => {
  try {
    await axios.delete(`http://localhost:3000/jobs/${id}`);
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.log(err);
  }
};

export { addJob, editJob, deleteJob };
