import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./JobCard.module.css";
import ReactQuill from "react-quill";
import JobDescription from "../JobDescription/JobDescription";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job , style}) => {
  const navigate = useNavigate();
  return (
    <CardComponent style={style} onClick={() => navigate(`/job/${job.id}`)}>
      <h4 className={styles.job_heading}>{job?.title}</h4>
      <div className={styles.company_details}>
        <div>
          <div className={styles.company_name}>
            <p>{job?.employer?.companyName}</p>
          </div>
          <div className={styles.company_location}>
            <p>{job?.location}</p>
          </div>
        </div>
      </div>
      <div className={styles.job_type}>
        <span>{job?.type}</span>
        <span>{job?.salary}</span>
      </div>
      <div className={styles.job_description} title={job?.description}>
        <JobDescription data={job?.description} />
      </div>
    </CardComponent>
  );
};

export default JobCard;
