import React from "react";

import { Link } from "react-router-dom";
import { Col, Popover, Row } from "antd";
import { BsFillChatFill } from "react-icons/bs";
import { FaHeart, FaStar } from "react-icons/fa";

import { Map } from "../../shared-ui/Map/Map";
import { getTitleById } from "../../utils/helper";
import Button from "../../shared-ui/Button/Button";
import defaultImage from "../../assets/images/default.png";
import ImagesGallery from "../../shared-ui/ImagesGallery/ImagesGallery";
import defaultBanner from "../../assets/images/sample/job-banner.png";
import "./_JobDetails.scss";
import "./_Responsive.scss";
import { selectCountries, selectEmploymentTypes, selectJobTitles, selectOtherJobs } from "../../features/jobs/slice";
import JobCard from "../../shared-ui/JobCard/JobCard";
import { transformJobData } from "../../features/jobs/transformers";
import { useAppSelector } from "../../store/hooks";

function JobDetails({ data = {}, showAllDetails = true, setJobDetails, extraData = {}, otherJobs }) {
  const countries = useAppSelector(selectCountries);
  const jobTitles = useAppSelector(selectJobTitles);
  const employmentTypes = useAppSelector(selectEmploymentTypes);
  return (
    <div className="c-job-detail-card">
      {/* Header */}
      <div className="header">
        <img className="job-banner-img" src={data.company?.companyBanner || defaultBanner} alt="banner-img" />
        <span className="banner-img-overlay"></span>

        <span className="job-info-wrapper">
          <img className="job-img" src={data.company?.companyLogo || defaultImage} alt="" />
          <span className="job-info">
            <h6 className="job-title">{data.company?.tagLine}</h6>
            <h3 className="job-company">{data.company?.companyName}</h3>
            <p className="job-sector">{data.company?.companyType}</p>
          </span>
        </span>

        {/* {showAllDetails && (
          <Button themeColor="transparent small">View Jobs</Button>
        )} */}

        <div onClick={() => setJobDetails(data)} className="back-btn">
          <img src={require("../../assets/images/icons/back-button.svg")} alt="" />
        </div>
      </div>

      {/* Content */}
      <div className="job-details-wrapper">
        <span className="details-header">
          <h3 className="job-title">
            Job title: <mark className="title">{data.title || "N/A"}</mark>{" "}
          </h3>

          <span className="actions-wrapper">
            <Button themeColor="shadowed">
              <Link to="/login">Apply</Link>
            </Button>
            <Button themeColor="shadowed rounded">
              {" "}
              <Link to="/login">
                <FaHeart size="14px" className="highlighted" />{" "}
              </Link>
            </Button>
            <Button themeColor="shadowed rounded" icon={<FaStar size="14px" className="highlighted" />} />

            <Button themeColor="shadowed rounded">
              {" "}
              <Link to="/login">
                {" "}
                <BsFillChatFill size="14px" className="highlighted" />{" "}
              </Link>
            </Button>
          </span>
        </span>

        <span className="content-box first">
          <span className="content-section">
            <span className="content-block">
              <h6 className="block-title">Job brief</h6>
              <p className="block-text">{data.jobBrief}</p>
            </span>

            <span className="content-block">
              <h6 className="block-title">Requirements</h6>

              <ul className="c-list">
                {data.additionalRequirement?.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
            </span>
          </span>

          {showAllDetails && (
            <div className="benefits-list">
              <span>
                <h6 className="title">Benefits</h6>
              </span>
              <span>
                Salary
                <mark>
                  {data.salaryRangeFrom}-{data.salaryRangeUpto} AED/month
                </mark>
              </span>
              <span>
                Flights provided
                <mark>{data.isAnnualFlight ? "Yes" : "No"}</mark>
              </span>
              <span>
                Family flights included
                <mark>{data.isFamilyFlight ? "Yes" : "No"}</mark>
              </span>
              <span>
                Tuition fees covered
                <mark>{data.isTuitionFee ? "Yes" : "No"}</mark>
              </span>
              <span>
                Accommodation
                {!data.accommodationListId && <mark>N/A</mark>}
                {data.accommodationListId && (
                  <mark>{data.accommodationListId?.map((d) => getTitleById(extraData.accommodations, d))}</mark>
                )}
              </span>
              <span>
                Utility bills
                <mark>{data.isUtilityBills ? "Yes" : "No"}</mark>
              </span>
              <span>
                Visa provided
                <mark>{data.isProvideVisa ? "Yes" : "No"}</mark>
              </span>
              <span>
                Gratuity bonus
                <mark>{data.isGratuityBonus ? "Yes" : "No"}</mark>
              </span>
            </div>
          )}
        </span>

        <span className="content-box">
          <span className="content-section">
            <span className="content-block">
              <h6 className="block-title">Jobs description</h6>

              <p className="block-text">{data.description}</p>
            </span>

            <span className="content-block">
              <h6 className="block-title">Skills required</h6>

              <ul className="c-list">
                {data.skills?.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
            </span>

            {showAllDetails && (
              <>
                <span className="content-block">
                  <h6 className="block-title">
                    About company:
                    <mark className="ml-2 blue">{data.company?.companyName || "N/A"}</mark>
                  </h6>

                  <p className="block-text">{data.company?.introduction || "N/A"}</p>
                </span>

                <ImagesGallery title="Company Photos" />

                <span className="content-block mt-4 pr-0">
                  <h6 className="block-title mb-3">Company Video </h6>

                  {!data.company?.videoUrl && "N/A"}
                  {data.company?.videoUrl && (
                    <div className="block-video">
                      <video className="w-100" controls>
                        <source src={data.company.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </span>

                <span className="content-block mt-4 pr-0">
                  <h6 className="block-title mb-3">Map</h6>
                  <div className="block-map">
                    <Map data={data?.company} location={data?.company?.companyLocation} />
                  </div>
                </span>
              </>
            )}
          </span>
        </span>

        {showAllDetails && (
          <>
            <span className="content-box first">
              <span className="content-section">
                <span className="content-block">
                  <h6 className="block-title mb-3">Other jobs in your sector</h6>

                  <Row gutter={16}>
                    {otherJobs?.map((otherJob) => (
                      <Col>
                        <JobCard
                          onClick={() => setJobDetails(otherJob)}
                          job={transformJobData(otherJob, jobTitles, employmentTypes, countries)}
                          type="box"
                        />
                      </Col>
                    ))}
                  </Row>

                  {/* <JobsCarouselv2 jobs={otherJobs?.slice(0, 5)} /> */}
                </span>
              </span>
            </span>

            <span className="content-box first">
              <span className="content-section">
                <span className="content-block">
                  <h6 className="block-title">Other jobs by this company</h6>
                  <p>N/A</p>
                  {/* <JobsCarouselv2 jobs={jobs.slice(0, 5)} /> */}
                </span>
              </span>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default JobDetails;
