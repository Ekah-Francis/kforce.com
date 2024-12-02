/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = ({ jobs }) => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p>Job not found!</p>;
  }

  return (
    <div className="job-details-container">
      <h2>{job.title}</h2>
      <p>{job.dateAdded}</p>
      <p>{job.description}</p>
      <p>
        {job.type} <br />
        {job.city}
      </p>
    </div>
  );
};

export default JobDetails;
