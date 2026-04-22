// src/components/gigwork/JobCard.jsx

import React from "react";
import "../../css/JobCard.css";

export default function JobCard({ job }) {

  return (
    <div className="job-card">

      {/* Title */}

      <div className="job-title">
        {job.title}
      </div>

      {/* Type */}

      <div className="job-type">
        Time: {job.type === "Hourly"
          ? "Hourly"
          : "Fixed Price"}
      </div>

      {/* Hours / Price + Experience */}

      <div className="job-row">

        {job.type === "Hourly" ? (
          <div>
            {job.hours} Hours needed
          </div>
        ) : (
          <div>
            Fixed Price:
            <strong>
              ₹{job.price}
            </strong>
          </div>
        )}

        <div>
          Experience:
          <strong>
            {job.experience}
          </strong>
        </div>

      </div>

      {/* Details */}

      <div className="job-details">
        {job.details}
      </div>

      {/* Buttons Row */}

      <div className="job-actions">

        <button className="job-btn">
          See Details
        </button>

        <button className="job-btn job-btn-accept">
          Accept
        </button>

      </div>

    </div>
  );
}