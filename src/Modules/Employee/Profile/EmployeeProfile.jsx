import React, { useEffect, useState } from "react";
import Input from "../../../Component/InputComponent/Input";
import styles from "../../Login/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from "../../../Component/CardComponent/CardComponent";
import { updateEmployeeProfile } from "./EmployeeAction";
import { useAlert } from "../../../Context/AlertContext";
import { CONSTANTS } from "../../../Consts";
import Select from "../../../Component/SelectComponent/Select";

const EmployeeProfile = () => {
  const [data, setData] = useState({});

  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const  handleChange=(event) =>{
    console.log(event.target.files)
    setFile(event.target.files[0]);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("skills", data["skills"]);
    formData.append("experience", data["experience"]);
    formData.append("resume", file);
    updateEmployeeProfile(formData).then((res) => {
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
                    <label>Skills</label>
                    <Input
                      type="text"
                      name="skills"
                      value={data["skills"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Experience</label>
                    <Select
                      name="experience"
                      value={data["experience"]}
                      onChange={handleInput}
                      data={CONSTANTS.EXPERIENCE_ARR}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Latest Resume</label>
                    <Input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                    />
                  </div>

                  <div className={`mt-4 ${styles.input_wrapper}`}>
                    <Input type="submit" value={"Update Profile"} />
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

export default EmployeeProfile;
