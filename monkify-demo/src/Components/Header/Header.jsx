import React from "react";
import "./Header.css";

export function Navbar() {
  return (
    <>
      <div className="custom-header">
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Search keyword..."
          />
          <span className="ms-2 text-muted">
            <i className="bi bi-search fs-4"></i>
          </span>
        </div>
        <div className="d-flex align-items-center">
          <button className="icon-btn">
            <i className="bi bi-bell fs-4"></i>
          </button>
          <button className="icon-btn ms-3">
            <i className="bi bi-share fs-4"></i>
          </button>
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <Navbar></Navbar>
      <div className="recruitment-section">
        <div className="recruitment-title">
          <i className="bi bi-person-add"></i>
          <div>
            <h5 className="mb-0">Recruitment</h5>
            <p className="mb-0 text-muted">Manage recruitment process</p>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-secondary me-2">
            Active Jobs
          </button>
          <button className="btn btn-create-job">+ Create New Job</button>
        </div>
      </div>
    </>
  );
}

export default Header;
