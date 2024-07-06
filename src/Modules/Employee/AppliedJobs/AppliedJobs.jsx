import React, { useEffect } from "react";
import { getAllAppliedJobs } from "../Profile/EmployeeAction";

const AppliedJobs = () => {
  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = () => {
    getAllAppliedJobs().then((res) => {
      console.log(res);
    });
  };

  return <div>AppliedJobs</div>;
};

export default AppliedJobs;
