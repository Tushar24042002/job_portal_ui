import React, { useEffect, useState } from "react";
import Input from "../../Component/InputComponent/Input";
import styles from "../Login/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from "../../Component/CardComponent/CardComponent";
import { addJob, getAllIndustry } from "./JobAction";
import { useAlert } from "../../Context/AlertContext";
import { CONSTANTS } from "../../Consts";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Multiselect from "multiselect-react-dropdown";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    ["clean"],
  ],
};

const formats = ["header", "list", "bold", "italic", "underline"];

const AddJob = () => {
  const [description, setDescription] = useState("");
  const [industry, setIndustry] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [data, setData] = useState({
  });

  const { showAlert } = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    fetchIndustry();
  }, []);

  const fetchIndustry = async () => {
    try {
      const res = await getAllIndustry();
      const updatedData = res?.data?.map((industry) => ({
        ...industry,
        key: industry.name,
        name: undefined, // Removing the original name key
      }));
      setIndustry(updatedData);
    } catch (error) {
      console.error("Failed to fetch industries", error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIndustrySelect = (selectedList) => {
    setSelectedIndustries(selectedList);
  };

  const handleIndustryRemove = (selectedList) => {
    setSelectedIndustries(selectedList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    data.description = description;
    data.industryIds = selectedIndustries.map((industry) => industry.id); // Add industry IDs to data
    try {
      await addJob(data);
      showAlert("Job added successfully!", CONSTANTS.ALERT.SUCCESS);
      navigate("/home");
    } catch (error) {
      showAlert("Failed to add job.", CONSTANTS.ALERT.DANGER);
    }
  };

  const handleChange = (content) => {
    setDescription(content);
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
                    <label>Job Title</label>
                    <Input
                      type="text"
                      name="title"
                      value={data["title"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Job Description</label>
                    <ReactQuill
                      value={description}
                      onChange={handleChange}
                      modules={modules}
                      formats={formats}
                      placeholder="Enter description..."
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Skills Requirements</label>
                    <Input
                      type="text"
                      name="requirements"
                      value={data["requirements"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Job Location</label>
                    <Input
                      type="text"
                      name="location"
                      value={data["location"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Salary Range</label>
                    <Input
                      type="text"
                      name="salary"
                      value={data["salary"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Job Type</label>
                    <Input
                      type="text"
                      name="type"
                      value={data["type"]}
                      onInput={handleInput}
                    />
                  </div>
                  <div className={styles.input_wrapper}>
                    <label>Industry Type</label>
                    <Multiselect
                      displayValue="key"
                      onKeyPressFn={function noRefCheck() {}}
                      onRemove={handleIndustryRemove}
                      onSearch={function noRefCheck() {}}
                      onSelect={handleIndustrySelect}
                      options={industry}
                    />
                  </div>
                  <div className={`mt-4 ${styles.input_wrapper}`}>
                    <Input type="submit" value={"Add Job"} />
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

export default AddJob;
