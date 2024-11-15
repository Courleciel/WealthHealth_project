import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "../../components/DataTable/DataTable";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <DataTable employees={employees} />
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeList;
