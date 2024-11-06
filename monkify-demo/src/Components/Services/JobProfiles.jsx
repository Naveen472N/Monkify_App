import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

function JobProfiles() {
  let [profiles, updateProfiles] = useState([]);

  useEffect(() => {
    getProfiles();
  }, []);

  return <></>;

  async function getProfiles() {
    let res = await fetch("http://localhost:9999/getProfiles");

    let data = await res.json;
    console.log(data);
  }
}
