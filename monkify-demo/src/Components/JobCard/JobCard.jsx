import React from "react";
import "./JobCard.css";
import { Link } from "react-router-dom";

function JobCard(job) {
  let tagClass =
    job.departmentType === "Marketing"
      ? "business"
      : job.departmentType === "Design"
      ? "tag-design"
      : job.departmentType === "Developer"
      ? "tag-development"
      : "tag-project";
  return (
    <Link
      to="/description"
      className="text-decoration-none nav-item text-dark "
    >
      <div className="job-card">
        <div className="col">
          <div className="card h-100">
            <div className="date-label">
              Active Until:
              <span className="date-highlight">{job.jobActiveDate}</span>
            </div>
            <div className="card-body">
              <h5 className="title">
                <b>{job.jobTitle}</b>
              </h5>
              <p>{job.jobDescription}</p>

              <div className="container mt-4">
                <span className={`tag ${tagClass}`}>
                  <span className={`dot ${tagClass}`}></span>
                  <span
                    className="text-dark"
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {job.departmentType}
                  </span>
                </span>
                <span className="tag">Full Time</span>
                <span className="tag">{job.jobLocation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
