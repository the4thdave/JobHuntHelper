import * as React from 'react';

const Navbar = (): JSX.Element => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand ms-6' href='#'>
            Job Hunt Helper
          </a>
          <div className='me-6'>
            <button className='btn btn-outline-success' type='button'>
              Sign Up
            </button>
            <button className='btn btn-outline-success ms-2' type='button'>
              Log In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
