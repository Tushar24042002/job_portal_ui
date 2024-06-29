import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const JobCard = ({ job }) => {
  console.log(job);
  return (
    <CardComponent>
      <h4>{job?.title}</h4>
    </CardComponent>
  );
};

export default JobCard;
