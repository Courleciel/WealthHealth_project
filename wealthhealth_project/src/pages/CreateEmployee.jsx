import React from "react";
import EmployeeForm from "../components/EmployeeForm";

const CreateEmployee = () => {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <EmployeeForm />
      </div>
    </div>
  );
};

export default CreateEmployee;
