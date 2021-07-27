import React, { useState } from "react";
import Welcome from "./Welcome";
import AddJob from "./AddJob";

const Home = () => {
  const [displayWelcome, toggleWelcome] = useState(true); // can change to false for testing
  const [displayAddScreen, toggleAddScreen] = useState(false); // can change to true for testing

  const jobMap = new Map();

  if (displayWelcome) {
    return (
      <Welcome
        handleWelcome={() => toggleWelcome(!displayWelcome)}
        handleAddScreen={() => toggleAddScreen(!displayAddScreen)}
      />
    );
  } else if (displayAddScreen) {
    return (
      <AddJob
        handleWelcome={() => toggleWelcome(!displayWelcome)}
        handleAddScreen={() => toggleAddScreen(!displayAddScreen)}
      />
    );
  } else return <div>Select action screen</div>; // Soon to be <SelectAction />
};

export default Home;
