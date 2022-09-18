import React, { useState, useEffect } from "react";

import Title from "./components/Title";
import Loading from "./components/Loading";
import CompanyButtons from "./components/CompanyButtons";
import JobInfo from "./components/JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="section">
      <Title />
      <div className="jobs-center">
        <CompanyButtons
          jobs={jobs}
          jobIndex={jobIndex}
          setJobIndex={setJobIndex}
        />
        <JobInfo jobs={jobs} jobIndex={jobIndex} />
      </div>
    </section>
  );
};

export default App;
