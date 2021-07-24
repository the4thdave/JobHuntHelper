import React, { Component } from "react";

interface HomeProps {
  displayWelcomePrompt: boolean;
}

export default class Home extends Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
    this.state = { displayWelcomePrompt: true };
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-4">Welcome!</h3>
        <p className="text-center fs-4">What would you like to do?</p>
        <div className="text-center">
          <button className="btn btn-primary me-3" type="button">
            Start a new job hunt
          </button>
          <button className="btn btn-primary" type="button">
            Continue an existing job hunt
          </button>
        </div>
      </div>
    );
  }
}
