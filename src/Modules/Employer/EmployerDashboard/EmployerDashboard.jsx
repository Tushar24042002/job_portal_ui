import React, { useEffect, useState } from "react";
import Button from "../../../Component/ButtonComponent/Button";
import { CONSTANTS } from "../../../Consts";
import { useNavigate } from "react-router-dom";
import Table from "../../../Component/TableComponent/Table";
import { getEmployerJobData } from "./EmployerDashboardAction";
import CardComponent from "../../../Component/CardComponent/CardComponent";
import Pagination from "../../../Component/Pagination/Pagination";

const headers = [
  {
    key: "S No",
    data: (e, index) => index + 1,
  },
  {
    key: "Job Title",
    data: (e) => e.title || "NA",
  },
  {
    key: "Applied at",
    data: (e) => e.createdAt || "NA",
  },
  {
    key: "Salary Range",
    data: (e) => e.salary || "NA",
  },
  {
    key: "Job Type",
    data: (e) => e.type || "NA",
  },
  {
    key: "Applications",
    data: (e) => e.applicationsCount,
  },
];

const EmployerDashboard = () => {
  const [tableData, setTableData] = useState([]);
  const [pageObj, setPageObj ] = useState({
    page: 1,
    pageSize: 5,
    totalPages: 10
  });
  const navigate = useNavigate();

  const clickFunction = () => {
    alert("working");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getEmployerJobData(pageObj)
      .then((res) => {
        console.log(res);
        setTableData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <CardComponent style={{ backgroundColor: "white" }}>
              <div>
                <Button
                  type={CONSTANTS.BUTTON.OUTLINE_PRIMARY}
                  value="Add Job"
                  onClick={() => navigate("/add-job")}
                />
              </div>
              <Table
                headers={headers}
                data={tableData}
                rowClickable={true}
                clickFunction={clickFunction}
              />
              <Pagination currentPage={pageObj.page} totalPages={pageObj.totalPages} onChange={null}/>
            </CardComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerDashboard;
