import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import "./MainContent.css";
import { Await } from "react-router-dom";

function MainContent() {
  useEffect(() => {
    getProfiles();
  }, []);

  let [profiles, updateProfile] = useState([]);

  return (
    <>
      <div className="main-content">
        {profiles.map((job) => {
          return <JobCard {...job} key={job.id}></JobCard>;
        })}
      </div>
    </>
  );

  async function getProfiles() {
    fetch("http://localhost:9999/getProfiles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Call json() to parse the response
      })
      .then((data) => {
        updateProfile(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
}

export default MainContent;
