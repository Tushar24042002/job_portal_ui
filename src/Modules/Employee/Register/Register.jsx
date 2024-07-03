import React, { useEffect, useState } from "react";
import Input from "../../../Component/InputComponent/Input";
import styles from "../../Employer/EmployerLogin.module.css"
import { Link, useNavigate } from "react-router-dom";
import CardComponent from "../../../Component/CardComponent/CardComponent";
import { employerRegisterRequest } from "../../Employer/EmployerAction";
import { useAlert } from "../../../Context/AlertContext";
import { CONSTANTS } from "../../../Consts";

const Register = () => {
  const [data, setData] = useState({
    role: "job_seeker",
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
    employerRegisterRequest(data).then((res) => {
      console.log(res);
      showAlert("Action successful!", CONSTANTS.ALERT.SUCCESS);
      navigate("/login");
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
                    <label>Enter your name</label>
                    <Input
                      type="text"
                      name="name"
                      value={data["name"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Enter your email</label>
                    <Input
                      type="email"
                      name="email"
                      value={data["email"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Enter your Password</label>
                    <Input
                      type="text"
                      name="password"
                      value={data["password"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Confirm Password</label>
                    <Input
                      type="text"
                      name="confirm_password"
                      value={data["confirm_password"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={`mt-4 ${styles.input_wrapper}`}>
                    <Input type="submit" value={"Register"} />
                  </div>
                </form>
                <div className={`mt-4 ${styles.input_wrapper}`}>
                  <Link to={"/login"}>
                    Already have an Account - Logged in
                  </Link>
                </div>
              </div>
            </CardComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
