import React, { useEffect, useState } from "react";
import Input from "../../../Component/InputComponent/Input";
import styles from "../../Login/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from "../../../Component/CardComponent/CardComponent";
import { employerProfileRequest } from "./../EmployerAction";
import { useAlert } from "../../../Context/AlertContext";
import { CONSTANTS } from "../../../Consts";
import TextArea from "../../../Component/TextAreaComponent/TextArea";

const EmployerProfile = () => {
  const [data, setData] = useState({
    userId: 2,
  });

  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    employerProfileRequest(data).then((res) => {
      console.log(res);
      showAlert("Employer Profile Update successful!", CONSTANTS.ALERT.SUCCESS);
      navigate("/home");
    });
  };

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-12 mx-auto">
            <CardComponent style={{ backgroundColor: "#fff" }}>
              <div className="p-3">
                <form onSubmit={handleSubmit}>
                  <div className={styles.input_wrapper}>
                    <label>Company Name</label>
                    <Input
                      type="text"
                      name="companyName"
                      value={data["companyName"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Company Description</label>
                    <TextArea
                      type="email"
                      name="companyDescription"
                      value={data["companyDescription"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Employee Website</label>
                    <Input
                      type="text"
                      name="companyWebsite"
                      value={data["companyWebsite"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Employee Range</label>
                    <Input
                      type="text"
                      name="employeeRange"
                      value={data["employeeRange"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={`mt-4 ${styles.input_wrapper}`}>
                    <Input type="submit" value={"Add Profile"} />
                  </div>
                </form>
              </div>
            </CardComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerProfile;
