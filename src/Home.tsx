import React, { useState } from "react";
import Welcome from "./Welcome";
import AddJob from "./AddJob";
import Job from "./Job";
import SelectAction from "./SelectAction";

const Home = () => {
  // State
  const [displayWelcome, toggleWelcome] = useState(true);
  const [displayAdd, toggleAdd] = useState(false);
  const [displaySelect, toggleSelect] = useState(false);
  const [jobMap, updateJobMap] = useState(new Map());

  // Helper Functions
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

  const handleSelect = () => {
    if (displayWelcome || displayAdd) {
      toggleWelcome(false);
      toggleAdd(false);
      toggleSelect(true);
    } else {
      toggleWelcome(true);
      toggleAdd(false);
      toggleSelect(false);
    }
  };

  // Display Logic
  if (displayWelcome) {
    return (
      <Welcome
        handleWelcome={() => toggleWelcome(!displayWelcome)}
        handleAdd={() => toggleAdd(!displayAdd)}
        handleSelect={handleSelect}
      />
    );
  } else if (displayAdd) {
    return (
      <AddJob
        handleWelcome={() => toggleWelcome(!displayWelcome)}
        handleAdd={() => toggleAdd(!displayAdd)}
        handleSelect={handleSelect}
        handleJob={createJobAndSetToMap}
      />
    );
  } else if (displaySelect) {
    return <SelectAction />;
  } else return <div>Blank</div>;
};

export default Home;
