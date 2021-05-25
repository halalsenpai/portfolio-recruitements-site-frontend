import React, { useEffect } from "react";

import { Checkbox } from "antd";

import defaultImage from "../../assets/images/default.png";
import { readableDate } from "../../utils/helper";

const JobTagTypes = {
  MESSAGED: "MESSAGED",
  APPLIED: "APPLIED",
  SHORTLISTED: "SHORLISTED",
  FEATURED: "FEATURED",
};

const getTagByType = (type) => {
  switch (type) {
    case JobTagTypes.FEATURED:
      return (
        <span className="featured-tag">
          <img className="tag-icon" src={require("../../assets/images/icons/diamond_white_icon.svg")} alt="" />

          <p className="tag-text">Featured</p>
        </span>
      );

    case JobTagTypes.APPLIED:
      return (
        <span className="job-tag">
          <img className="tag-icon" src={require("../../assets/images/icons/check-icon-green.svg")} alt="" />

          <p className="tag-text">Applied</p>
        </span>
      );

    case JobTagTypes.SHORTLISTED:
      return (
        <span className="job-tag">
          <img className="tag-icon" src={require("../../assets/images/icons/shortlisted-job-icon.svg")} alt="" />

          <p className="tag-text">Shorlisted</p>
        </span>
      );

    case JobTagTypes.MESSAGED:
      return (
        <span className="job-tag">
          <img className="tag-icon" src={require("../../assets/images/icons/messaged-job-icon.svg")} alt="" />

          <p className="tag-text">Messaged</p>
        </span>
      );

    default:
      return null;
  }
};

function JobCard({ job = {}, type, onClick }) {
  return (
    <div onClick={onClick} className={`c-job-card ${job.featured && "featured"} ${type}`}>
      <div className="job-card-first-container">
        <img className="job-thumbnail" src={job?.company?.companyLogo || defaultImage} alt="logo" />

        <span className={type === "box" ? "" : "info-wrapper"}>
          <span className={type === "box" ? "" : "info"}>
            {type !== "box" && (
              <span className="title-row">
                <h6 className="title">{job.title || "N/A"}</h6>

                <span className="location-container">
                  <img
                    className="location-icon"
                    src={require("../../assets/images/icons/location_icon.svg")}
                    alt="icon"
                  />

                  <p className="location-text">{job.country || "N/A"}</p>
                </span>
              </span>
            )}

            {type !== "box" && (
              <span>
                <p>{job.company?.companyName}</p>

                <p>Open till {readableDate(job.endDate)}</p>
              </span>
            )}
          </span>

          {type === "box" && (
            <>
              <span className="more-info">
                <p>Ends on {readableDate(job.endDate)}</p>
              </span>
            </>
          )}

          {type !== "box" && (
            <span className="more-info">
              <p>{job.employmentType}</p>
              <p>
                {job.salaryRangeFrom}-{job.salaryRangeUpto} AED-month
              </p>
            </span>
          )}
        </span>
      </div>

      <div className={type === "box" ? "details-container-box" : "details-container"}>
        {type !== "box" ? <p>{job?.jobBrief ? String(job?.jobBrief).slice(0, 145) + "..." : ""}</p> : null}

        {type === "box" && (
          <div>
            <p style={{ fontSize: "12px" }}>{job?.title}</p>
            <p>{job?.company?.companyName}</p>
            <p>{job?.employmentType}</p>
            <p>{job?.salaryRangeUpto} AED-month</p>
            <p>{job.country}</p>
          </div>
        )}
      </div>

      <span className="tag-container">
        {/* <Checkbox className="jobcard-checkbox-mobile job-tag" /> */}

        {type !== "box" && getTagByType(job.messaged)}

        {type !== "box" && getTagByType(JobTagTypes.SHORTLISTED)}

        {type !== "box" && getTagByType(job.applied)}

        {job?.featured && getTagByType(JobTagTypes.FEATURED)}
      </span>
    </div>
  );
}

export default JobCard;
