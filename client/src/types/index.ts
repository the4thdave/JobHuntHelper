interface IJob {
  company: string;
  position: string;
  city: string;
  state: string;
  date: string;
}

interface IReqPayload {
  id: number;
  company: string;
  position: string;
  city: string;
  state: string;
  date: string;
}

export { IJob, IReqPayload };
