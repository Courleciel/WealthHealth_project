import React from "react";

const EmployeeForm = () => {
  return (
    <form id="create-employee">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <input type="text" id="date-of-birth" />

      <label htmlFor="start-date">Start Date</label>
      <input type="text" id="start-date" />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input type="text" id="street" />

        <label htmlFor="city">City</label>
        <input type="text" id="city" />

        <label htmlFor="state">State</label>
        <select id="state">
          <option value="">Select State</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          <option value="TX">Texas</option>
          <option value="FL">Florida</option>
        </select>

        <label htmlFor="zip-code">Zip Code</label>
        <input type="number" id="zip-code" />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select id="department">
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>

      <button type="button">Save</button>
    </form>
  );
};

export default EmployeeForm;
