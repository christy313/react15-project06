import React from "react";

const CompanyButtons = ({ jobs, jobIndex, setJobIndex }) => (
  <div className="btn-container">
    {jobs.map((job, index) => (
      <button
        className={`job-btn ${index === jobIndex && "active-btn"}`}
        onClick={() => setJobIndex(index)}
        key={job.id}
      >
        {job.company}
      </button>
    ))}
  </div>
);

export default CompanyButtons;
