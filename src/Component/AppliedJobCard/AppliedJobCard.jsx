import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./AppliedJobCard.module.css";
import { useNavigate } from "react-router-dom";

const AppliedJobCard = ({ data, style }) => {
  const navigate = useNavigate();
  return (
    <CardComponent style={style} onClick={() => navigate(`/job/${data?.job?.id}`)}>
      <div className={styles.job_type}>
        <span className="alert alert-primary">{data?.status}</span>
      </div>
      <h4 className={styles.job_heading}>{data?.job?.title}</h4>
      <div className={styles.company_details}>
        <div className={styles.company_name}>
          <p>{data?.job?.employer?.companyName}</p>
        </div>
      </div>

      <div className={styles.company_details}>
        <div className={styles.company_location}>
          <p>{data?.job?.location}</p>
        </div>
      </div>
      <div className={styles.company_details}>
        <div className={styles.company_location}>
          <p>{data?.appliedAt}</p>
        </div>
      </div>
      <div className={styles.read_more}>Read More...</div>
    </CardComponent>
  );
};

export default AppliedJobCard;
