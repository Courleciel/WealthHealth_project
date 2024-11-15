import React from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm";

const CreateEmployee = () => {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <EmployeeForm />
      </div>
    </div>
  );
};

export default CreateEmployee;
