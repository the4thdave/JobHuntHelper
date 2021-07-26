import React, { useState } from 'react';
import Welcome from './Welcome';
import AddJob from './AddJob';

const Home = () => {
  const [displayWelcome, toggleWelcome] = useState(false); // set to false for testing
  const [displayAddScreen, toggleAddScreen] = useState(true); // set to true for testing

  if (displayWelcome) return <Welcome handleWelcome={() => toggleWelcome(!displayWelcome)} handleAddScreen={() => toggleAddScreen(!displayAddScreen)}/>
  else if (displayAddScreen) return <AddJob />;
  else return <div>Select action screen</div>;
}

export default Home;

