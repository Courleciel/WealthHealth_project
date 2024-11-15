import React from "react";
import { useTable } from "react-table";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const data = React.useMemo(
    () => [
      {
        firstName: "John",
        lastName: "Doe",
        department: "Sales",
        startDate: "2022-01-15",
        dateOfBirth: "1985-06-25",
        city: "New York",
        state: "NY",
        zipCode: "10001",
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Start Date", accessor: "startDate" },
      { Header: "Department", accessor: "department" },
      { Header: "Date of Birth", accessor: "dateOfBirth" },
      { Header: "City", accessor: "city" },
      { Header: "State", accessor: "state" },
      { Header: "Zip Code", accessor: "zipCode" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table {...getTableProps()} className="display">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeList;
