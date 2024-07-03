import React, { useState } from "react";
import Input from "../../../Component/InputComponent/Input";
import styles from "../../Employer/EmployerLogin.module.css";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from "../../../Component/CardComponent/CardComponent";
import { useAlert } from "../../../Context/AlertContext";
import { employerLoginRequest } from "../../Employer/EmployerAction";
import { CONSTANTS } from "../../../Consts";

const Login = () => {
  const { showAlert } = useAlert();
  const [data, setData] = useState({});
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
    employerLoginRequest(data).then((res) => {
      console.log(res);
      showAlert("Action successful!", CONSTANTS.ALERT.SUCCESS);
      navigate("/register");
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
                  <div className={`mt-4 ${styles.input_wrapper}`}>
                    <Input type="submit" value={"submit"} />
                  </div>
                </form>
                <div className={`mt-4 ${styles.input_wrapper}`}>
                  <Link to={"/register"}>
                    Create an Account - First Time User
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

export default Login;
