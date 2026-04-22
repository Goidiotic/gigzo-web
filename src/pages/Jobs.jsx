// src/pages/gigwork/Jobs.jsx

import React, { useState } from "react";
import AppLayout from "./layout/AppLayout";
import JobCard from "../components/gigzo/JobCard";
import "../css/Jobs.css";

export default function Jobs() {

  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Build P2P Crypto Buy/Sell Portal",
      type: "Hourly",
      hours: 45,
      experience: "Intermediate",
      details:
        "Need to build a secure escrow based P2P crypto platform with admin panel and payment tracking system."
    },
    {
      id: 2,
      title: "Create Client Management Dashboard",
      type: "Fixed",
      price: 45000,
      experience: "Expert",
      details:
        "Develop full client management dashboard including ticket system, payment proof, and reporting tools."
    }
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout pageName="Jobs">

      <div className="jobs-page">

        {/* Search */}

        <input
          type="text"
          placeholder="Search jobs..."
          className="jobs-search"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {/* Job List */}

        <div className="jobs-grid">

          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}

        </div>

      </div>

    </AppLayout>
  );
}