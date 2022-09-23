import axios from 'axios';
import { IReqPayload } from '../types/index';

const addJob = async (payload: IReqPayload) => {
  try {
    await axios.post('http://localhost:3000/jobs', payload);
  } catch {
    throw 'An error occurred';
  }
};

const editJob = async (payload: IReqPayload) => {
  const { id } = payload;
  try {
    axios.put(`http://localhost:3000/jobs/${id}`, payload);
  } catch {
    throw 'An error occurred';
  }
};

const deleteJob = async (id: number) => {
  try {
    await axios.delete(`http://localhost:3000/jobs/${id}`);
  } catch {
    throw 'An error occurred';
  }
};

export { addJob, editJob, deleteJob };
