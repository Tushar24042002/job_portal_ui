import React from "react";
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


const RouterFIle = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/employer-register" element={<EmployerRegister />} />
        <Route path="/employer-profile" element={<EmployerProfile />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/job/:id" element={<JobPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<EmployerDashboard/>}/>
        </Routes>
    </>
  );
};

export default RouterFIle;
