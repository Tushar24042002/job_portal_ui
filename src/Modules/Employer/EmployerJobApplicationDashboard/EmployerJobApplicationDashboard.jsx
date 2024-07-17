import React, { useEffect, useState } from "react";
import Button from "../../../Component/ButtonComponent/Button";
import { CONSTANTS } from "../../../Consts";
import { useNavigate, useParams } from "react-router-dom";
import Table from "../../../Component/TableComponent/Table";
import { getEmployerJobData } from "../EmployerDashboard/EmployerDashboardAction";
import CardComponent from "../../../Component/CardComponent/CardComponent";
import Pagination from "../../../Component/Pagination/Pagination";
import Title from "../../../Component/Title/Title";
import { formatDateTime } from "../../../Utils";
import { getEmployerJobApplicationData } from "../EmployerDashboard/EmployerDashboardAction";

const headers = [
  {
    key: "S No",
    data: (e, index) => index + 1,
  },
  {
    key: "User",
    data: (e) => e?.jobSeeker?.user?.email || "NA",
  },
  {
    key: "Applied at",
    data: (e) => formatDateTime(e?.appliedAt) || "NA",
  },
  {
    key: "Experience",
    data: (e) => e?.jobSeeker?.experience || "NA",
  },
  {
    key: "Status",
    data: (e) => e.status || "NA",
  },
  {
    key: "Action",
    data: (e) => e.applicationsCount,
  },
];

const EmployerJobApplicationDashboard = () => {
  const [tableData, setTableData] = useState([]);
  
  const [pageObj, setPageObj ] = useState({
    page: 1,
    pageSize: 5,
    totalPages: 10
  });
  const navigate = useNavigate();
const { jobId } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getEmployerJobApplicationData(pageObj, jobId)
      .then((res) => {
        console.log(res);
        setTableData(res?.data?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div className="container pb-5">
      <div className="row">
          <div className="col-lg-12">
            <div className="title">
            <Title size={2}>Employer Dashboard</Title>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <CardComponent style={{ backgroundColor: "white" }}>
             
              <Table
                headers={headers}
                data={tableData}
                rowClickable={false}
              />
              <Pagination currentPage={pageObj.page} totalPages={pageObj.totalPages} onChange={null}/>
            </CardComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerJobApplicationDashboard;
