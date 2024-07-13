import React, { useEffect, useState } from "react";
import Input from "../../../Component/InputComponent/Input";
import styles from "../../Login/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from "../../../Component/CardComponent/CardComponent";
import {
  employerProfileRequest,
  getEmployerProfile,
} from "./../EmployerAction";
import { useAlert } from "../../../Context/AlertContext";
import { CONSTANTS } from "../../../Consts";
import TextArea from "../../../Component/TextAreaComponent/TextArea";
import DropDown from "../../../Component/DropDown/DropDown";

const employeeRange = [
  "1-50 Employees",
  "50-100 Employees",
  "100-200 Employees",
  "200-500 Employees",
  "500-1000 Employees",
  "1000+ Employees",
];

const EmployerProfile = () => {
  const [data, setData] = useState({});

  const { showAlert } = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    getEmployerProfile()
      .then((res) => {
        console.log(res);
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                      value={data["companyName"] || null}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Company Description</label>
                    <TextArea
                      type="email"
                      name="companyDescription"
                      value={data["companyDescription"] || null}
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
                    <DropDown
                      name={"employeeRange"}
                      value={data["employeeRange"]}
                      onChangeHandler={handleInput}
                    >
                        <option value={""}>Select Option</option>
                      {employeeRange &&
                        employeeRange?.map((e, index) => {
                        
                          return (
                            <option value={e} key={index}>
                              {e}
                            </option>
                          );
                        })}
                    </DropDown>
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
