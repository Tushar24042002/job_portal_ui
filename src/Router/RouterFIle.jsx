import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Modules/Home/Home";
import Header from "../Component/Header/Header";

const RouterFIle = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RouterFIle;
