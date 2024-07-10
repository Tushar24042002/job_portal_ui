import React, { useContext, useEffect, useState } from "react";
import { getAllAppliedJobs } from "../Profile/EmployeeAction";
import AppliedJobCard from "../../../Component/AppliedJobCard/AppliedJobCard";
import Title from "../../../Component/Title/Title";
import { AuthContext } from "../../../Context/AuthContext";
import LoginModal from "../../../Component/LoginModal/LoginModal";

const AppliedJobs = () => {
  const [data, setData] = useState([]);
  const [isLoginShow, setIsLoginShow] = useState(false);
  const {isLoggedIn} = useContext(AuthContext);
  useEffect(() => {
    if(isLoggedIn){
      getJobs();
    }
    else{
      setIsLoginShow(true);
    }

  }, []);

  const getJobs = () => {
    getAllAppliedJobs()
      .then((res) => {
        console.log(res);
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title">
            <Title size={2}>Applied Jobs</Title>
            </div>
          </div>
        </div>
        <div className="row">
          {data &&
            data?.map((e, index) => {
              return (
                <div className="col-lg-4 mb-4">
                  <AppliedJobCard data={e} key={index} />
                </div>
              );
            })}
        </div>
      </div>
      {
        isLoginShow &&     <LoginModal setIsShow={()=>setIsLoginShow(false) } route={`/applied-jobs`}/>
      }
    </section>
  );
};

export default AppliedJobs;
