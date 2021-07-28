import React, { useState } from "react";
import Welcome from "./Welcome";
import AddJob from "./AddJob";
import Job from "./Job";
import SelectAction from "./SelectAction";
import Stats from "./Stats";

const Home = () => {
  // State
  const [displayWelcome, toggleWelcome] = useState(true);
  const [displayAdd, toggleAdd] = useState(false);
  const [displaySelect, toggleSelect] = useState(false);
  const [displayStats, toggleStats] = useState(false);
  const [jobMap, updateJobMap] = useState(new Map());

  // Helper Functions
  const createJobAndSetToMap = (
    company: string,
    jobTitle: string,
    city: string,
    state: string,
    strDateApplied: string
  ) => {
    // Create job object
    let job = new Job(company, jobTitle, city, state, strDateApplied);

    // Update job Map()
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
      toggleWelcome(false);
      toggleAdd(true);
      toggleSelect(false);
    }
  };

  const handleStats = () => {
    if (displaySelect) {
      toggleSelect(false);
      toggleStats(true);
    } else {
      toggleSelect(true);
      toggleStats(false);
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
    return (
      <SelectAction handleSelect={handleSelect} handleStats={handleStats} />
    );
  } else if (displayStats) {
    return <Stats handleStats={handleStats} map={jobMap} />;
  } else return <div>Blank</div>;
};

export default Home;
