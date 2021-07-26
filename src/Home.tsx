import React, { useState } from 'react';
import Welcome from './Welcome';

const Home = () => {
  const [displayWelcome, toggleWelcome] = useState(true);
  const [displayAddScreen, toggleAddScreen] = useState(false);

  if (displayWelcome) return <Welcome handleWelcome={() => toggleWelcome(!displayWelcome)} handleAddScreen={() => toggleAddScreen(!displayAddScreen)}/>
  else if (displayAddScreen) return <div>Add Screen</div>;
  else return <div>Select action screen</div>;
}

export default Home;

