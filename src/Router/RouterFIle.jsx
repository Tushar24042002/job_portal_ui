import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Modules/Home/Home";
import Header from "../Component/Header/Header";
import EmployerLogin from "../Modules/Employer/EmployerLogin";
import EmployerRegister from "../Modules/Employer/EmployerRegister";
import EmployerProfile from "../Modules/Employer/EmployerProfile/EmployerProfile";
import AddJob from "../Modules/Jobs/AddJob";
import JobPage from "../Modules/Jobs/JobPage/JobPage";
import Login from "../Modules/Employee/Login/Login";
import Register from "../Modules/Employee/Register/Register";

const RouterFIle = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/employer-login" element={<EmployerLogin />} />
        <Route path="/employer-register" element={<EmployerRegister />} />
        <Route path="/employer-profile" element={<EmployerProfile />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/job/:id" element={<JobPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default RouterFIle;
