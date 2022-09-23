import * as React from 'react';
import '@testing-library/jest-dom';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import axios from 'axios';
import { IJob } from '../../types/index';
import { addJob, editJob, deleteJob } from '../../utils/jobUtil';

jest.mock('axios');
jest.mock('../../utils/jobUtil');

window.alert = jest.fn();

const renderComponent = (): RenderResult => {
  return render(<Home />);
};

const mockGetReq = (jobs: IJob[] | []) => {
  (axios.get as jest.Mock).mockResolvedValue({
    data: jobs,
  });
};

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', async () => {
    mockGetReq([
      {
        company: 'gap',
        position: 'engineer',
        city: 'los angeles',
        state: 'california',
        date: '03/31/2022',
      },
    ]);
    renderComponent();
    expect(await screen.findByText('gap')).toBeInTheDocument();
    expect(
      screen.getByText('Here is a breakdown of your job hunt:'),
    ).toBeInTheDocument();
  });

  it('should open addJobModal when button is clicked', async () => {
    mockGetReq([
      {
        company: 'Gap',
        position: 'Devops Engineer',
        city: 'Los Angeles',
        state: 'California',
        date: '03/31/2022',
      },
    ]);
    const user = userEvent.setup();
    renderComponent();
    await screen.findByText('Gap');
    await user.click(screen.getByText('Add Job'));
    expect(
      screen.getByText('Next, complete missing information:'),
    ).toBeInTheDocument();
  });

  it('should submit add job form', async () => {
    mockGetReq([
      {
        company: 'Gap',
        position: 'Devops Engineer',
        city: 'Los Angeles',
        state: 'California',
        date: '03/31/2022',
      },
    ]);
    const user = userEvent.setup();
    renderComponent();
    await screen.findByText('Gap');
    await user.click(screen.getByText('Add Job'));
    await user.click(screen.getByRole('textbox', { name: 'company' }));
    await user.keyboard('Google');
    await user.click(screen.getByRole('textbox', { name: 'job-title' }));
    await user.keyboard('Software Engineer');
    await user.click(screen.getByRole('textbox', { name: 'city' }));
    await user.keyboard('San Francisco');
    await user.click(screen.getByRole('textbox', { name: 'state' }));
    await user.keyboard('California');
    await user.click(screen.getByRole('textbox', { name: 'date-applied' }));
    await user.keyboard('09/12/2022');
    await user.click(screen.getByText('Save Job Info'));
    expect(addJob).toBeCalled();
  });

  it('should submit edit job form', async () => {
    mockGetReq([
      {
        company: 'Gap',
        position: 'Devops Engineer',
        city: 'Los Angeles',
        state: 'California',
        date: '03/31/2022',
      },
    ]);
    const user = userEvent.setup();
    renderComponent();
    await screen.findByText('Gap');
    await user.click(screen.getByText('Edit'));
    expect(screen.getByText('Edit Job')).toBeInTheDocument();
    await user.click(screen.getByRole('textbox', { name: 'company' }));
    await user.keyboard('Google');
    await user.click(screen.getByRole('textbox', { name: 'job-title' }));
    await user.keyboard('Software Engineer');
    await user.click(screen.getByRole('textbox', { name: 'city' }));
    await user.keyboard('San Francisco');
    await user.click(screen.getByRole('textbox', { name: 'state' }));
    await user.keyboard('California');
    await user.click(screen.getByRole('textbox', { name: 'date-applied' }));
    await user.keyboard('09/12/2022');
    await user.click(screen.getByText('Save Job Info'));
    expect(editJob).toBeCalled();
  });

  it('should delete job', async () => {
    mockGetReq([
      {
        company: 'Gap',
        position: 'Devops Engineer',
        city: 'Los Angeles',
        state: 'California',
        date: '03/31/2022',
      },
    ]);
    const user = userEvent.setup();
    renderComponent();
    await screen.findByText('Gap');
    await user.click(screen.getByText('Delete'));
    expect(deleteJob).toBeCalled();
  });
});
