import React from 'react';

interface WelcomeProps {
    handleWelcome: any;
    handleAddScreen: any;
}

const Welcome = (props: WelcomeProps) => {
    return (
        <div className="container">
        <h3 className="text-center mt-4">Welcome!</h3>
        <p className="text-center fs-4">What would you like to do?</p>
        <div className="text-center">
          <button onClick={() => { props.handleWelcome(); props.handleAddScreen()}} className="btn btn-primary me-3" type="button">
            Start a new job hunt
          </button>
          <button className="btn btn-primary" type="button">
            Continue an existing job hunt
          </button>
        </div>
      </div>
    )
}

export default Welcome;