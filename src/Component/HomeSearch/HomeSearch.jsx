import React, { useEffect } from "react";
import styles from "./HomeSearch.module.css";
import Input from "../InputComponent/Input";
import JobCard from "../JobCard/JobCard";
import { getAllJob } from "./HomeSearchAction";

const jobs = [
  {
    title: "job one",
  },
  {
    title: "job one",
  },
  {
    title: "job one",
  },
  {
    title: "job one",
  },
  {
    title: "job one",
  },
];

const HomeSearch = () => {
  useEffect(()=>{
getAllJob();
  },[])
  return (
    <section className={styles.home_search}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.input_wrapper}>
              <Input placeHolder={"Search By Job , Category or Location"} />
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
                  <JobCard job={data} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeSearch;
