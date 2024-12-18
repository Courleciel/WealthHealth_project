import React, { useState } from "react";
import "./DataTable.css";

const DataTable = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);

  const handleSort = (column) => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);
  };

  return (
    <div>
      <div className="table-header">
        <div className="entries">
          <label>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={10}>10</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
            </select>
          </label>
        </div>
        <div className="search">
          <label>
            Search:
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="table-container">

      <table className="display">
        <thead>
          <tr>
            <th onClick={() => handleSort("firstName")}>
              First Name {sortColumn === "firstName" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("lastName")}>
              Last Name {sortColumn === "lastName" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("department")}>
              Department {sortColumn === "department" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("startDate")}>
              Start Date {sortColumn === "startDate" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("dateOfBirth")}>
              Date of Birth {sortColumn === "dateOfBirth" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("street")}>
              Street {sortColumn === "street" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("city")}>
              City {sortColumn === "city" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("state")}>
              State {sortColumn === "state" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("zipCode")}>
              Zip Code {sortColumn === "zipCode" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.department}</td>
              <td>{employee.startDate}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>


      <div className="footer">
        <p className="employees-found">{filteredEmployees.length} employees found.</p>
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
