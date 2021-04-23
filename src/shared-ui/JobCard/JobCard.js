import React from "react";

const JobTagTypes = {
  MESSAGED: "MESSAGED",
  APPLIED: "APPLIED",
  SHORTLISTED: "SHORLISTED",
  FEATURED: "FEATURED",
};

function JobCard({ job, type }) {
  const getTagByType = (type) => {
    switch (type) {
      case JobTagTypes.FEATURED:
        return (
          <span className="featured-tag">
            <img
              className="tag-icon"
              src={require("../../assets/images/icons/diamond_white_icon.svg")}
              alt=""
            />

            <p className="tag-text">Featured</p>
          </span>
        );

      case JobTagTypes.APPLIED:
        return (
          <span className="job-tag">
            <img
              className="tag-icon"
              src={require("../../assets/images/icons/check-icon-green.svg")}
              alt=""
            />

            <p className="tag-text">Applied</p>
          </span>
        );

      case JobTagTypes.SHORTLISTED:
        return (
          <span className="job-tag">
            <img
              className="tag-icon"
              src={require("../../assets/images/icons/shortlisted-job-icon.svg")}
              alt=""
            />

            <p className="tag-text">Shorlisted</p>
          </span>
        );

      case JobTagTypes.MESSAGED:
        return (
          <span className="job-tag">
            <img
              className="tag-icon"
              src={require("../../assets/images/icons/messaged-job-icon.svg")}
              alt=""
            />

            <p className="tag-text">Applied</p>
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`c-job-card ${job.featured && "featured"} ${type} `}>
      <div className="job-card-first-container">
        <img className="job-thumbnail" src={job.imgUrl} alt="" />

        <span className={type === "box" ? "" : "info-wrapper"}>
          <span className={type === "box" ? "" : "info"}>
            {type === "box" ? (
              ""
            ) : (
              <span className="title-row">
                <h6 className="title">{job.title}</h6>

                <span className="location-container">
                  <img
                    className="location-icon"
                    src={require("../../assets/images/icons/location_icon.svg")}
                    alt=""
                  />

                  <p className="location-text">{job.location}</p>
                </span>
              </span>
            )}

            {type === "box" ? (
              ""
            ) : (
              <span>
                <p>{job.company}</p>

                <p>{job.endDate}</p>
              </span>
            )}
          </span>

          {type === "box" ? (
            <>
              <span className="more-info">
                <p>Ends in 20 days</p>
              </span>
            </>
          ) : (
            <span className="more-info">
              <p>{job.type}</p>

              <p>{job.salary} AED-month</p>
            </span>
          )}
        </span>
      </div>

      <div
        className={
          type === "box" ? "details-container-box" : "details-container"
        }
      >
        <p>{job?.details}</p>
        {type === "box" ? (
          <>
            <div>
              <h5 className="title">{job.title}</h5>
              <p>{job.company}</p>
              <p>{job.type}</p>
              <p>{job.salary} AED</p>
              <p>{job.location}</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      <span className="tag-container">
        {type === "box" ? "" : getTagByType(JobTagTypes.MESSAGED)}

        {type === "box" ? "" : getTagByType(JobTagTypes.SHORTLISTED)}

        {type === "box" ? "" : getTagByType(JobTagTypes.APPLIED)}

        {job?.featured && getTagByType(JobTagTypes.FEATURED)}
      </span>
    </div>
  );
}

export default JobCard;
