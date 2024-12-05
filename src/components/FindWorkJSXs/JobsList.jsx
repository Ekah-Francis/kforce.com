/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/FindWorkCSS/JobsList.css";

const JobsList = ({ jobs }) => {
  const navigate = useNavigate();

  const handleJobClick = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <div className="jobs-list-container">
      <p className="job-count top-count">
        Displaying 1 - {jobs.length} of {jobs.length}
      </p>
      <div className="jobs-container">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <div className="job-title-container">
              <h2 className="job-title" onClick={() => handleJobClick(job.id)}>
                {job.title}
              </h2>
              <p className="job-date">{job.dateAdded}</p>
            </div>
            <div className="job-description-container">
              <p className="job-description">
                {job.description.slice(0, 300)}...
              </p>
              <p className="job-type-city">
                {job.type} <br />
                {job.city}
              </p>
            </div>
            <div className="content-line"></div>
          </div>
        ))}
      </div>
      <p className="job-count btm-count">
        Displaying 1 - {jobs.length} of {jobs.length}
      </p>
    </div>
  );
};

export default JobsList;
