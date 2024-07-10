import React, { useContext, useEffect, useState } from "react";
import CardComponent from "../../../Component/CardComponent/CardComponent";
import styles from "./JobPage.module.css";
import JobDescription from "../../../Component/JobDescription/JobDescription";
import {
  getAllJob,
  getSingleJob,
} from "../../../Component/HomeSearch/HomeSearchAction";
import { useNavigate, useParams } from "react-router-dom";
import JobCard from "../../../Component/JobCard/JobCard";
import { FaLocationDot } from "react-icons/fa6";
import { PiBagFill } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import Button from "../../../Component/ButtonComponent/Button";
import { CONSTANTS } from "../../../Consts";
import { applyJob } from "../JobAction";
import { useAlert } from "../../../Context/AlertContext";
import { AuthContext } from "../../../Context/AuthContext";
import Modal from "../../../Component/ModalComponent/Modal";
import LoginModal from "../../../Component/LoginModal/LoginModal";

const JobPage = () => {
  const [job, setJob] = useState([]);
  const [similarJob, setSimilarJob] = useState([]);
  const {showAlert} = useAlert();
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoginShow, setIsLoginShow] = useState(false);

  const {isLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    getSingleJob(id).then((res) => {
      console.log(res);
      setJob(res?.data);
    });

    getAllJob().then((res) => {
      setSimilarJob(res?.data);
    });
  }, [id]);


  const applyJobFunction=()=>{
    if(isLoggedIn){
      applyJob(id).then((res)=>{
        showAlert("Job Apply successfully!", CONSTANTS.ALERT.SUCCESS);
      })
    }
    else{
    setIsLoginShow(true);
    }
  
  }



  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8 mb-3">
            <CardComponent>
              <div className="p-lg-3 p-0">
                <h4 className={styles.job_heading}>{job?.title}</h4>
                <div className={styles.company_details}>
                  <div className={styles.company_name}>
                    <p>{job?.employer?.companyName}</p>
                  </div>
                </div>
                <hr />
                <div className={styles.job_details}>
                  {job?.type && (
                    <div className={"d-flex align-items-start mb-3"}>
                      <div>
                        <PiBagFill size={16} color="rgb(118, 118, 118)" />
                      </div>
                      <div className={`ps-3 ${styles.details}`}>
                        <div className={styles.details_head}>Job Type</div>
                        <div className={styles.details_body}>
                          <span className="alert alert-success">
                            {job?.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  {job?.salary && (
                    <div className={"d-flex align-items-start mb-3"}>
                      <div>
                        <FaRegMoneyBillAlt
                          size={16}
                          color="rgb(118, 118, 118)"
                        />
                      </div>
                      <div className={`ps-3 ${styles.details}`}>
                        <div className={styles.details_head}>Salary Range</div>
                        <div className={styles.details_body}>
                          <span className="alert alert-success">
                            {job?.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {job?.requirements && (
                    <div className={"d-flex align-items-start mb-3"}>
                      <div>
                        <HiLightBulb size={16} color="rgb(118, 118, 118)" />
                      </div>
                      <div className={`ps-3 ${styles.details}`}>
                        <div className={styles.details_head}>Salary Range</div>
                        <div className={styles.details_body}>
                          {job?.requirements
                            ?.split("|")
                            ?.map((data, subIndex) => (
                              <span className="alert alert-primary">
                                {data}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <hr />
                <div className={styles.location}>
                  <div>Location</div>
                  <p>
                    <FaLocationDot size={16} color="rgb(118, 118, 118)" />
                    <span className="ms-2">{job?.location}</span>
                  </p>
                </div>
                <hr />
                <div className={styles.job_description}>
                  <JobDescription data={job?.description} />
                </div>
                <hr />
                <div className={styles.btn_section}>
                  <Button
                    type={CONSTANTS.BUTTON.PRIMARY}
                    value="Apply Now"
                    onClick={() => applyJobFunction()}
                  />

                  <Button
                    type={CONSTANTS.BUTTON.OUTLINE_SECONDARY}
                    value="Saved"
                    onClick={() => navigate("/add-job")}
                  />
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
      {
        isLoginShow &&     <LoginModal setIsShow={()=>setIsLoginShow(false) } route={`/job/${id}`}/>
      }
 
    </section>
  );
};

export default JobPage;
