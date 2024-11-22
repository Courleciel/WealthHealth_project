import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import Modal from "../../components/Modal/Modal";
import { departments, states } from "../../constants/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEmployee = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    startDate: null,
    dateOfBirth: null,
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addEmployee({
        ...formData,
        startDate: formData.startDate
          ? formData.startDate.toLocaleDateString("fr-FR")
          : null,
        dateOfBirth: formData.dateOfBirth
          ? formData.dateOfBirth.toLocaleDateString("fr-FR")
          : null,
      })
    );

    setShowModal(true);

    setFormData({
      firstName: "",
      lastName: "",
      department: "",
      startDate: null,
      dateOfBirth: null,
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <Dropdown
            label="Department"
            options={departments}
            value={formData.department}
            onChange={(value) => setFormData({ ...formData, department: value })}
          />

          <label htmlFor="startDate">Start Date</label>
          <DatePicker
            selected={formData.startDate}
            onChange={(date) =>
              setFormData({ ...formData, startDate: date })
            }
            dateFormat="dd-MM-yyyy"
            placeholderText="Select a start date"
            className="date-picker-input"
          />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <DatePicker
            selected={formData.dateOfBirth}
            onChange={(date) =>
              setFormData({ ...formData, dateOfBirth: date })
            }
            dateFormat="dd-MM-yyyy"
            placeholderText="Select date of birth"
            className="date-picker-input"
          />

          <fieldset>
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={formData.street}
              onChange={handleChange}
              required
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <Dropdown
              label="State"
              options={states}
              value={formData.state}
              onChange={(value) =>
                setFormData({ ...formData, state: value })
              }
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </fieldset>

          <button className="button-form" type="submit">
            Save
          </button>
        </form>
      </div>

      {showModal && (
        <Modal
          message="Employee created!"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CreateEmployee;
