import React, { useState } from "react";
import Welcome from "./Welcome";
import AddJob from "./AddJob";
import Job from "./Job";

const Home = () => {
  const [displayWelcome, toggleWelcome] = useState(true); // can change to false for testing
  const [displayAddScreen, toggleAddScreen] = useState(false); // can change to true for testing
  const [jobMap, updateJobMap] = useState(new Map());

  const createJobAndSetToMap = (
    company: string,
    jobTitle: string,
    city: string,
    state: string,
    strDateApplied: string
  ) => {
    let job = new Job(company, jobTitle, city, state, strDateApplied);

    let newMap = new Map(jobMap);
    let nextJobId = newMap.size + 1;
    newMap.set(nextJobId, job);
    updateJobMap(newMap);
    alert("Job info saved!");
  };

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
        handleJob={createJobAndSetToMap}
      />
    );
  } else return <div>Select action screen</div>; // Soon to be <SelectAction />
};

export default Home;
