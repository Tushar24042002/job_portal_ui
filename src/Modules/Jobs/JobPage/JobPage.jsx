import React, { useEffect, useState } from "react";
import CardComponent from "../../../Component/CardComponent/CardComponent";
import styles from "./JobPage.module.css";
import JobDescription from "../../../Component/JobDescription/JobDescription";
import {
  getAllJob,
  getSingleJob,
} from "../../../Component/HomeSearch/HomeSearchAction";
import { useNavigate, useParams } from "react-router-dom";
import JobCard from "../../../Component/JobCard/JobCard";

const JobPage = () => {
  const [job, setJob] = useState([]);
  const [similarJob, setSimilarJob] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleJob(id).then((res) => {
      console.log(res);
      setJob(res?.data);
    });

    getAllJob().then((res) => {
      setSimilarJob(res?.data);
    });
  }, [id]);

  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8">
            <CardComponent>
              <div className="p-3">
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
                <div className={styles.job_description}>
                  <JobDescription data={job?.description} />
                </div>
              </div>
            </CardComponent>
          </div>
          <div className="col-lg-4">
            {similarJob &&
              similarJob?.map((data, index) => {
                return (
                  <div
                    style={{ marginBottom: "1rem" }}
                    onClick={() => navigate(`/job/${data.id}`)}
                  >
                    <JobCard job={data} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPage;
