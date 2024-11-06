import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  let [depts, updateDept] = useState([]);

  useEffect(() => {
    getDepartments();
  }, []);

  let keyId = 0;
  return (
    <div className="sidebar">
      <div className="company-logo">
        <i className="bi bi-map-fill"></i> BordUp
      </div>
      <hr />
      <div className="company-logo d-flex">
        <i className="bi bi-r-square-fill"></i>
        <h6 className="mt-2">Rocks Company</h6>
      </div>
      <ul className="menu">
        <li className="btn">
          <i className="bi bi-grid"></i> Dashboard
        </li>
        <li>
          <i className="bi bi-people"></i> Employee
        </li>
        <li className="active">
          <i className="bi bi-person-add"></i> Recruitment
        </li>
        <li>
          <i className="bi bi-phone-fill"></i> Payroll
        </li>
        <li>
          <i className="bi bi-calendar-event-fill"></i> Schedule
        </li>
      </ul>
      <div className="departments">
        <h4>
          DEPARTMENT <i className="bi bi-plus h1"></i>
        </h4>

        <ul>
          {depts.map((d) => {
            return (
              <li key={keyId++} className={`${d}`}>
                <span>
                  <i className="bi bi-square-fill"></i>
                </span>
                <span className="text-dark m-lg-3">{d}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="settings">
        <h4>OTHER</h4>
        <ul>
          <li>Setting</li>
          <li>Help Center</li>
        </ul>
      </div>
    </div>
  );

  async function getDepartments() {
    fetch("http://localhost:9999/getDepartments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Call json() to parse the response
      })
      .then((data) => {
        updateDept(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
}

export default Sidebar;
