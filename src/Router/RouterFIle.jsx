import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Modules/Home/Home";
import Header from "../Component/Header/Header";
import EmployerRegister from "../Modules/Employer/EmployerRegister";
import EmployerProfile from "../Modules/Employer/EmployerProfile/EmployerProfile";
import AddJob from "../Modules/Jobs/AddJob";
import JobPage from "../Modules/Jobs/JobPage/JobPage";
import Register from "../Modules/Employee/Register/Register";
import Login from "../Modules/Login/Login";
import EmployerDashboard from "../Modules/Employer/EmployerDashboard/EmployerDashboard";
import { validateToken } from "../Modules/Employer/EmployerAction";
import { AuthContext } from "../Context/AuthContext";
import { CONSTANTS } from "../Consts";
import AppliedJobs from "../Modules/Employee/AppliedJobs/AppliedJobs";
import EmployeeProfile from "../Modules/Employee/Profile/EmployeeProfile";
import OtpSecreen from "../Modules/Otp/OtpSecreen";

const RouterFIle = () => {
  const { isLoggedIn, setIsLoggedIn, setUserRole, userRole } =
    useContext(AuthContext);

  useEffect(() => {
    validateToken()
      .then((res) => {
        console.log(res);
        setIsLoggedIn(res?.data?.success);
        setUserRole(res?.data?.data?.role);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Routes>
        {userRole === CONSTANTS.ROLE.JOB_SEEKER && (
          <>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/job/:id" element={<JobPage />} />
            <Route path="/applied-jobs" element={<AppliedJobs />} />
            <Route path="/profile" element={<EmployeeProfile />} />
          </>
        )}

        {
          userRole === CONSTANTS.ROLE.EMPLOYER && (
            <>
             <Route path="/job/:id" element={<JobPage />} />
             <Route path="/profile" element={<EmployerProfile />} />
             <Route path="/add-job" element={<AddJob />} />
             <Route path="/dashboard" element={<EmployerDashboard />} />
            </>
          )
        }
        <Route exact path="/" element={<Home />} />
        <Route path="/employer-register" element={<EmployerRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OtpSecreen/>}/>

      </Routes>
    </>
  );
};

export default RouterFIle;
