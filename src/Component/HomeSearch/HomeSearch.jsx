import React, { useEffect, useState } from "react";
import styles from "./HomeSearch.module.css";
import Input from "../InputComponent/Input";
import JobCard from "../JobCard/JobCard";
import { getAllJob } from "./HomeSearchAction";
import CardComponent from "../CardComponent/CardComponent";

const HomeSearch = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getAllJob().then((res) => {
      console.log(res);
      setJobs(res?.data);
    });
  }, []);
  return (
    <main className={styles.home_search}> 
      <div className={`container py-5 `}>
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.input_wrapper}>
              <CardComponent>
              <Input placeHolder={"Search By Job , Category or Location"} />
              </CardComponent>
            </div>
          </div>
        </div>
      </div>
      
        <div className="container">
          <div className="row">
            {jobs &&
              jobs.map((data, index) => {
                return (
                  <div className="col-lg-4 mb-4" key={index}>
                    <JobCard style={{ backgroundColor: "#fff" }} job={data} />
                  </div>
                );
              })}
          </div>
        </div>
      </main>
  );
};

export default HomeSearch;
