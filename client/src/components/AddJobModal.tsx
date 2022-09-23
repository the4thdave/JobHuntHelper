import * as React from 'react';
import JobForm from './JobForm';
import { IJob, IReqPayload } from '../types/index';
import Modal from 'react-bootstrap/Modal';

interface AddJobProps {
  jobData: Map<number, IJob>;
  handleAdd: (payload: IReqPayload) => void;
  handleEdit: (payload: IReqPayload) => void;
  show: boolean;
  onHide: () => void;
  editMode: boolean;
  jobId: number;
}

const AddJobModal = (props: AddJobProps): JSX.Element => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.editMode ? 'Edit Job' : 'Add Job'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <JobForm {...props} />
      </Modal.Body>
    </Modal>
  );
};

export default AddJobModal;
