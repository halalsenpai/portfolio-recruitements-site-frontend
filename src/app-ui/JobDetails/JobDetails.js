import React from "react";

import { Link, useHistory } from "react-router-dom";
import { Col, Divider, Popover, Row, Select } from "antd";
import { BsFillChatFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Map } from "../../shared-ui/Map/Map";
import { getTitleById, useWindowSize } from "../../utils/helper";
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
// import { createMarkup } from "../../utils/helper";

const { Option } = Select;

function JobDetails({ data = {}, showAllDetails = true, setJobDetails, extraData = {}, otherJobs, executeScroll, setShowJobDetails }) {
  const countries = useAppSelector(selectCountries);
  const jobTitles = useAppSelector(selectJobTitles);
  const employmentTypes = useAppSelector(selectEmploymentTypes);
  const history = useHistory();
  const createMarkup = (html) => {
    return { __html: html };
  };
  const { width, height } = useWindowSize();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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
      <div className="job-details-wrapper content-box">
        <span className="content-box first">
          <span className="content-section">
            {width > 1025 && (
              <>
                <span className="details-header">
                  <span className="job-title content-block">
                    <h6 className="company-page-heading">Job title:</h6>
                    <span className="title">{data?.jobTitle?.title || ""}</span>{" "}
                  </span>

                  <span className="actions-wrapper">
                    {/* <Button themeColor="shadowed">
              <Link to="/login">Apply</Link>
            </Button> */}
                    <Button className="applied" themeColor="outlined">
                      <Link to="/login">Apply</Link>
                    </Button>
                    <Button className="applied" themeColor="outlined">
                      <Link to="/login">Follow Company</Link>
                    </Button>
                    <Button className="applied" themeColor="outlined">
                      <Link to="/login">Shorlist Job</Link>
                    </Button>
                    {/* <Button
              icon={<span className="icon following-icon"></span>}
              title="Follow Company"
              themeColor="shadowed rounded">
              <Link to="/login"></Link>
            </Button>
            <Button
              title="Shorlist Job"
              onClick={() => history.push("/login")}
              themeColor="shadowed rounded"
              icon={<FaStar size="14px" className="highlighted" />}
            />
            <Button title="Chat" themeColor="shadowed rounded">
              {" "}
              <Link to="/login">
                {" "}
                <BsFillChatFill size="14px" className="highlighted" />{" "}
              </Link>
            </Button> */}
                  </span>
                </span>
                <span className="content-block">
                  <h6 className="block-title company-page-heading">Job brief</h6>
                  <p className="block-text">{data.jobBrief}</p>
                </span>
              </>
            )}

            <span className="content-block ">
              <h6 className="block-title company-page-heading">Requirements</h6>

              <ul className="c-list">
                {/* {data.additionalRequirement?.map((d) => (
                  <li>{d}</li>
                ))} */}
                <div dangerouslySetInnerHTML={createMarkup(data?.additionalRequirement)} />
              </ul>
            </span>
          </span>
          {width < 1025 && (
            <>
              <span className="mobile-button">
                <span className="content-section">
                  <span className="job-title content-block">
                    <h6 className="company-page-heading">Job title:</h6>
                    <span className="title">{data?.jobTitle?.title || ""}</span>{" "}
                  </span>
                  <span className="content-block">
                    <h6 className="block-title company-page-heading">Job brief</h6>
                    <p className="block-text">{data.jobBrief}</p>
                  </span>
                </span>
                <span className="actions-wrapper">
                  <Button className="applied" themeColor="outlined">
                    <Link to="/login">Apply</Link>
                  </Button>
                  <Button className="applied" themeColor="outlined">
                    <Link to="/login">Follow Company</Link>
                  </Button>
                  <Button className="applied" themeColor="outlined">
                    <Link to="/login">Shorlist Job</Link>
                  </Button>
                </span>
              </span>
            </>
          )}
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
                {!data.accommodationListId && <mark></mark>}
                {data.accommodationListId && <mark>{getTitleById(extraData.accommodations, data?.accommodationListId)}</mark>}
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
              <h6 className="block-title company-page-heading">Jobs description</h6>

              {/* <p className="block-text">{data.description}</p> */}
              <div dangerouslySetInnerHTML={createMarkup(data?.description)} />
            </span>

            {/* <span className="content-block">
              <h6 className="block-title">Skills required</h6>

              <ul className="c-list">
                {data.skills?.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
            </span> */}
            <span className="content-block">
              <h6 className="block-title company-page-heading">Skills required</h6>

              <div dangerouslySetInnerHTML={createMarkup(data?.skills)} />
            </span>

            <Divider className="divider" />

            {showAllDetails && (
              <>
                <span className="content-block">
                  <h6 className="block-title  d-flex justify-content-between align-items-center">
                    <h6 className="company-page-heading">     
                      About company:
                      <span style={{ color: "#2a8fff" }} className="ml-2 blue">
                        {data?.company?.companyName || ""}
                      </span>
                    </h6>
                    {/* <Select
                      getPopupContainer={(trigger) => trigger.parentNode}
                      dropdownAlign={{ pageYOffset: 0 }}
                      dropdownMatchSelectWidth="true"
                      placeholder="Other Branches">
                      <Option>branches</Option>
                      <Option>branches</Option>
                    </Select> */}
                  </h6>

                  <span className="block-text markup" dangerouslySetInnerHTML={createMarkup(data?.company?.introduction)}></span>
                </span>

                {/* <ImagesGallery
                  images={data?.company?.photoUrl}
                  title="Company Photos"
                /> */}
                <Carousel
                  className="company-photos-carousel"
                  swipeable={false}
                  draggable={false}
                  showDots
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all 1s"
                  transitionDuration={1000}
                  containerClass="carousel-container"
                  dotListClass="custom-dot-list-style">
                  {data?.company?.photoUrl.map((img, i) => (
                    <img style={{ borderRadius: "20px" }} className="company-single-photo" src={img} alt={`image ${i}`} height={250} width="100%" />
                  ))}
                </Carousel>

                <span className="content-block mt-4 pr-0">
                  <h6 className="block-title company-page-heading thick-title mb-3">Company Video </h6>

                  {!data.company?.videoUrl && ""}
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
                  <h6 className="block-title company-page-heading thick-title mb-3">Map</h6>
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
                  <h6 className="block-title company-page-heading thick-title mb-3">Other jobs in your sector</h6>

                  <Row gutter={16} style={{ margin: "0 auto", width: "100%" }} justify={`${otherJobs?.length === 4 ? "space-around" : "flex-start"}`}>
                    {otherJobs?.map((otherJob) => (
                      <Col span={8} lg={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <JobCard
                          onClick={() => {
                            setJobDetails(otherJob);
                            executeScroll();
                          }}
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
                  <h6 className="block-title company-page-heading thick-title">Other jobs by this company</h6>
                  <p></p>
                  {/* <Row
                    gutter={16}
                    style={{ margin: "0 auto", width: "100%" }}
                    justify={`${
                      otherJobs?.length === 4 ? "space-around" : "flex-start"
                    }`}>
                    {otherJobs?.map((otherJob) => (
                      <Col>
                        <JobCard
                          onClick={() => {
                            setJobDetails(otherJob);
                            executeScroll();
                          }}
                          job={transformJobData(
                            otherJob,
                            jobTitles,
                            employmentTypes,
                            countries
                          )}
                          type="box"
                        />
                      </Col>
                    ))}
                  </Row> */}
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
