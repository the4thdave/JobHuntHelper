import * as React from 'react';
import '@testing-library/jest-dom';
import { render, RenderResult, screen } from '@testing-library/react';
import AddJobModal, { AddJobProps } from '../AddJobModal';

const props = {
  jobData: new Map(),
  handleAdd: jest.fn(),
  handleEdit: jest.fn(),
  show: true,
  onHide: jest.fn(),
  editMode: false,
  jobId: -1,
};

const renderComponent = (props: AddJobProps): RenderResult => {
  return render(<AddJobModal {...props} />);
};

describe('Add Job Modal', () => {
  it('should render add modal header when editMode is false', () => {
    renderComponent(props);
    expect(screen.getByText('Add Job')).toBeInTheDocument;
  });

  it('should render edit modal header when editMode is true', () => {
    const modifiedProps = { ...props, editMode: true };
    renderComponent(modifiedProps);
    expect(screen.getByText('Edit Job')).toBeInTheDocument;
  });
});
