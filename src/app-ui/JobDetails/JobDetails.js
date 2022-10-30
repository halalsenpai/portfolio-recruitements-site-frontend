import React from "react";

import { Link, useHistory } from "react-router-dom";
import { Col, Divider, Popover, Row, Select } from "antd";
import { IoMdCloseCircle } from "react-icons/io";
import { BsFillChatFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import { JobMap, Map } from "../../shared-ui/Map/Map";
import { getTitleById, useWindowSize } from "../../utils/helper";
import Button from "../../shared-ui/Button/Button";
import defaultImage from "../../assets/images/default.png";
import ImagesGallery from "../../shared-ui/ImagesGallery/ImagesGallery";
import defaultBanner from "../../assets/images/sample/job-banner.png";
import "./_JobDetails.scss";
import "./_Responsive.scss";
import {
  selectCountries,
  selectCategories,
  selectCurrencyType,
  selectEmploymentTypes,
  selectJobTitles,
  selectOtherJobs,
  selectSalaryType,
  selectLanguage,
  selectAllCountries,
} from "../../features/jobs/slice";
import JobCard from "../../shared-ui/JobCard/JobCard";
import { transformJobData } from "../../features/jobs/transformers";
import { useAppSelector } from "../../store/hooks";
import moment from "moment";
import { showErrorMessage, showSuccessMessage, showWarningMessage } from "../../utils/message";
// import { createMarkup } from "../../utils/helper";

const { Option } = Select;
export const responsive = {
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

function JobDetails({ data = {}, showAllDetails = true, setJobDetails, extraData = {}, setSelectedJobId, otherJobs, executeScroll, setShowJobDetails, searchedCompany }) {
  const countries = useAppSelector(selectCountries);
  const jobTitles = useAppSelector(selectJobTitles);
  const employmentTypes = useAppSelector(selectEmploymentTypes);
  const categories = useAppSelector(selectCategories);
  const currencyType = useAppSelector(selectCurrencyType);
  const salaryTypes = useAppSelector(selectSalaryType);
  const languages = useAppSelector(selectLanguage);
  const allCountries = useAppSelector(selectAllCountries);

  // console.log("job details -> ", data);
  const history = useHistory();
  const createMarkup = (html) => {
    return { __html: html };
  };
  const { width, height } = useWindowSize();
  const {
    company: { specialities, companySize, categoryId, videoUrl },
  } = data;
  // console.log("job details -> ", data);
  const category = getTitleById(categories, categoryId);
  // const shareLink = `${process.env.REACT_APP_CANDIDATE_PORTAL_URL}/find-jobs/${data.id}`;
  const shareLink = `${process.env.REACT_APP_HOMEPAGE_URL}/share-job-details/${data.id}`;
  return (
    <div className="c-job-detail-card">
      {/* Header */}
      <div className="header">
        <img className="job-banner-img" src={data.companyBanner || defaultBanner} alt="banner-img" />
        <span className="banner-img-overlay"></span>

        <span className="job-info-wrapper">
          <img className="job-img" src={data?.company?.companyLogo || data.companyLogo || defaultImage} alt="" />
          {/* <span className="job-info">
            <h6 className="job-title">{data.company?.tagLine}</h6>
            <h3 className="job-company">{data.company?.companyName}</h3>
            <p className="job-sector">{data.company?.companyType}</p>
          </span> */}
          {/* {console.log("my data", data.company)} */}
          <span className="company-details">
            <h1 className="company-name">{data?.company}</h1>
            <h1 className="company-type">{data?.company?.tagLine || "empowering alphas to hunt"}</h1>
            <h1 className="company-location small-text-common">
              {data?.country || "UAE,"} {data?.country && data?.city?.title && ","}
              {data?.city?.title || "Dubai"}{" "}
            </h1>
            <p className="job-date small-text-common">Job start date: {moment(data?.startDate ? data?.startDate : "12/05/2022").format("DD/MM/YYYY")} </p>

            <p className="job-date small-text-common">Contract end date: {moment(data?.endDate ? data?.endDate : "12/05/2022").format("DD/MM/YYYY")} </p>
            {width > 769 ? <>{specialities?.length >= 1 && <p className="company-specialities small-text-common">Specialise in: {specialities?.join(", ")}</p>}</> : null}
          </span>
        </span>
        {width > 769 ? (
          <div className="display-flex company-details-wrapper">
            <div className="display-flex align-items company-sector-details">
              <span className="company-details center">
                <img className="mr-1" src={require("./../../assets/images/icons/Pie.svg")} />{" "}
                <div>
                  <h1 className="company-type d-flex align-items-center"> Company Sector </h1>
                  <p className="company-category">{category || "Information Technology"}</p>
                </div>
              </span>

              <span className="company-details center">
                <img className="mr-1" src={require("./../../assets/images/icons/Users-3.svg")} />{" "}
                <div className="short-details">
                  <h1 className="company-type d-flex align-items-center">Company Size </h1>
                  <p className="company-category">{companySize || "10-50 employees"}</p>
                </div>
              </span>
            </div>
            {/* V I E W __ A L L ___ J O B S */}
            <div
              className="close-btn"
              onClick={() => {
                setShowJobDetails(false);
                setSelectedJobId(null);
              }}>
              <IoMdCloseCircle color="white" size="24px" />
            </div>
            {!searchedCompany ? (
              <div className="view-jobs">
                {/* <Button
                    themecolor="outlined-white"
                    onClick={() => NavigateToFindJobs(data.company?.id)}>
                    View All Jobs
                  </Button> */}
              </div>
            ) : null}
          </div>
        ) : (
          <>
            {/* V I E W __ A L L ___ J O B S */}
            <div
              className="close-btn"
              onClick={() => {
                setShowJobDetails(false);
                setSelectedJobId(null);
              }}>
              <IoMdCloseCircle color="white" size="24px" />
            </div>
            {!searchedCompany ? (
              <div className="view-jobs">
                {/* <Button
                    themecolor="outlined-white"
                    onClick={() => NavigateToFindJobs(data.company?.id)}>
                    View All Jobs
                  </Button> */}
              </div>
            ) : null}
          </>
        )}

        {/* {showAllDetails && (
          <Button themecolor="transparent small">View Jobs</Button>
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
                    <span className="title">{data?.title || ""}</span>{" "}
                  </span>

                  <span className="actions-wrapper">
                    <Button className="applied" themecolor="outlined">
                      <Link to="/login">Apply</Link>
                    </Button>
                    <Button className="applied" themecolor="outlined">
                      <Link to="/login">Follow Company</Link>
                    </Button>
                    <Button className="applied" themecolor="outlined">
                      <Link to="/login">Shorlist Job</Link>
                    </Button>
                    <div className="share-only-mobile">
                      <img
                        onClick={() => {
                          navigator.clipboard.writeText(shareLink);
                          showSuccessMessage("Link copied to clip board");
                        }}
                        className="avatar"
                        src={require("../../assets/images/icons/profile/fly.png")}
                        alt="share"
                        height={25}
                      />
                    </div>
                    {/* <Button
              icon={<span className="icon following-icon"></span>}
              title="Follow Company"
              themecolor="shadowed rounded">
              <Link to="/login"></Link>
            </Button>
            <Button
              title="Shorlist Job"
              onClick={() => history.push("/login")}
              themecolor="shadowed rounded"
              icon={<FaStar size="14px" className="highlighted" />}
            />
            <Button title="Chat" themecolor="shadowed rounded">
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

              <ul className="">
                {/* {data?.qualification?.title && <li>{data?.qualification?.title}</li>} */}
                {/* {data?.certificate?.title && <li>Certificate required{data?.certificate?.title}</li>} */}
                {/* {data?.experienceListId >= 0 && (
                  <li>
                    {data?.experienceListId === 0 ? "No experience required" : data.experienceListId + " years of minimum experience"}
                    &nbsp;
                  </li>
                )} */}
                <li>BS in Computer Science, degree in a related engineering field, or software development training program</li>
                <li>Experience with both backend and front end development</li>
                <li>Programming experience with Java, React, or Node.js</li>
                <li>Experience with AWS (or other cloud providers) technology</li>
                <li>
                  Knowledge of professional software engineeri ng practices for the full software development life cycle (SDLC), including coding standards, code reviews, source
                  control management, build processes, testing, and operations
                </li>
                {data?.language?.title && <li>Native language: &nbsp;{data?.language?.title}</li>}
                {data?.otherLanguageId?.length && (
                  <li>
                    Other languages: &nbsp;
                    {data?.otherLanguageId.map((lang) => getTitleById(languages, parseInt(lang)))?.join(", ")}
                  </li>
                )}
                {data?.ageLimit && <li>Age Limit: &nbsp;{data?.ageLimit}</li>}
                {data?.suitableJob?.title && <li>{data?.suitableJob?.title}</li>}
              </ul>

              <div dangerouslySetInnerHTML={createMarkup(data?.additionalRequirement)} />
            </span>
          </span>
          {width < 1025 && (
            <>
              <span className="mobile-button">
                <span className="content-section">
                  <span className="job-title content-block">
                    <h6 className="company-page-heading">
                      Job title:
                      <div className="share-only-mobiles">
                        <img
                          onClick={() => {
                            navigator.clipboard.writeText(shareLink);
                            showSuccessMessage("Link copied to clip board");
                          }}
                          className="avatar"
                          src={require("../../assets/images/icons/profile/fly.png")}
                          alt="share"
                          height={25}
                        />
                      </div>
                    </h6>
                    <span className="title">{data?.jobTitle?.title || ""}</span>{" "}
                  </span>
                  <span className="content-block">
                    <h6 className="block-title company-page-heading">Job brief</h6>
                    <p className="block-text">{data.jobBrief}</p>
                  </span>
                </span>
                <span className="actions-wrapper">
                  <Button className="applied" themecolor="outlined">
                    <Link to="/login">Apply</Link>
                  </Button>
                  <Button className="applied" themecolor="outlined">
                    <Link to="/login">Follow Company</Link>
                  </Button>
                  <Button className="applied" themecolor="outlined">
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
              <span style={{ gap: "4px" }}>
                Salary
                <mark style={{ textAlign: "end" }}>
                  {data?.salaryRangeFrom}-{data?.salaryRangeUpto} {data?.currency}/{data?.salaryType}
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
              <span style={{ gap: "1px" }}>
                Accommodation
                {!data.accommodationListId && <mark></mark>}
                {data?.accommodationListId && (
                  <mark style={{ textAlign: "end" }}>
                    {!isNaN(Number(data?.accommodationListId)) ? getTitleById(extraData.accommodations, Number(data?.accommodationListId?.[0])) : data?.accommodationListId?.[0]}
                  </mark>
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
              <h6 className="block-title company-page-heading">Jobs description</h6>
              <div>
                Wolf.io is seeking an Associate Software Engineer. As an Associate Software Engineer, you will work with a talented team of engineers to improve Aspen's enterprise
                business software and analytics frameworks. You'll help to build secure, scalable, and fast tools to make processing data, generating analytics, and reporting
                within our teams seamless and easy. We are in a phase of rapid growth driven by increasing demand for our services. To meet this demand, we are looking to hire
                exceptional developers to work alongside our existing team. Together driving our platform and services forward. Day to day you will
                <li>Contribute to the definition, architecture, and design of software components, solution designs, tools, and tests.</li>
                <li>Ensure high availability and reliability of business applications</li>
                <li>Debug production issues </li>
                <li>Communicate risks and plans to mitigate them </li>
                <li>Contribute to a culture of team accomplishment and collaboration</li>
                <li>Understand deeply how business drivers impact our priorities and planning</li>
              </div>
              {/* <p className="block-text">{data.description}</p> */}
              <div dangerouslySetInnerHTML={createMarkup(data?.description)} />
            </span>
            <span className="content-block">
              {data?.lisence?.length >= 1 && <h6 className="company-page-heading mt-5">Licenses</h6>}
              <div className="license-tags">
                {data?.lisence?.map((tag) => (
                  <span className="tags">{tag}</span>
                ))}
              </div>
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
              <ul>
                <li>Excellent analytical and problem-solving skills.</li>
                <li>Excellent written and verbal communication skills.</li>
                <li>Mastery of engineering software and systems.</li>
                <li>Proficient with Microsoft Office Suite or similar software to maintain accurate records.</li>
              </ul>
              <div dangerouslySetInnerHTML={createMarkup(data?.skills)} />
            </span>

            {showAllDetails && (
              <>
                {data?.city?.lat && data?.city?.lng && (
                  <span className="content-block mt-2 pr-0">
                    <h6 className=" company-page-heading thick-title mb-3">Job Location</h6>
                    <span className="padding-left">
                      <div className="block-map">
                        <JobMap data={data?.company} lat={data?.city?.lat} lng={data?.city?.lng} zoom={16} />
                      </div>
                    </span>
                  </span>
                )}
                <Divider className="divider" />
                <span className="content-block">
                  <h6 className="  d-flex justify-content-between align-items-center">
                    <h6 className=" block-title company-page-heading">
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
                  <span>
                    We are a private equity firm based in Dubai, OR and Abu Dhabi. We utilize data and technology to enhance business insight, propel growth, transform our
                    investment strategies and business operations, and execute industry-leading deals. The unique wolf.io worldview is reflected in a nimble, efficient
                    organizational structure that allows the company to capitalize on market demands, seize business opportunities and excel in a wide range of roles including
                    investment, lending and servicing, acquisitions, management, joint ventures, asset management, recapitalization and advisory services.
                  </span>
                  <span className="block-text markup" dangerouslySetInnerHTML={createMarkup(data?.company?.introduction)}></span>
                </span>

                {/* <ImagesGallery
                  images={data?.company?.photoUrl}
                  title="Company Photos"
                /> */}
                {data?.photoUrl && data?.photoUrl?.length > 0 && (
                  <Carousel
                    className="company-photos-carousel"
                    swipeable={true}
                    draggable={true}
                    showDots
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all 1s"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style">
                    {data?.photoUrl?.length &&
                      data?.photoUrl.map((img, i) => (
                        <img
                          style={
                            {
                              // borderRadius: "20px",
                              // objectFit: "contain",
                              // width: "100%",
                              // height: "100%",
                            }
                          }
                          className="company-single-photo"
                          src={img}
                          alt={`image ${i}`}
                          // height={220}
                          // width={220}
                        />
                      ))}
                  </Carousel>
                )}

                {data?.company?.videoUrl && (
                  <span className="content-block mt-4 pr-0">
                    <h6 className="block-title company-page-heading thick-title mb-3">Company Video </h6>
                    {data?.company?.videoUrl && (
                      <div className="page-layouts video-section">
                        <div className="w-100">
                          <ReactPlayer width={"100%"} style={{ width: "100%" }} url={data.company?.videoUrl} className="company-profile-video" />
                        </div>
                      </div>
                    )}
                  </span>
                )}

                <span className="content-block mt-4 pr-0">
                  <h6 className=" company-page-heading thick-title mb-3">Map</h6>
                  <div className="block-map">
                    <Map data={data?.company} location={data?.company?.companyLocation} zoom={16} />
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

                  <Row
                    gutter={16}
                    style={{ margin: "0 auto", width: "100%" }}
                    // justify={`${otherJobs?.length === 4 ? " " : "flex-start"}`}
                    justify="flex-start">
                    {otherJobs?.map((otherJob, i) => (
                      <Col key={i} span={8} lg={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <JobCard
                          onClick={() => {
                            setJobDetails(otherJob);
                            executeScroll();
                          }}
                          job={transformJobData(otherJob, jobTitles, employmentTypes, allCountries, salaryTypes, currencyType)}
                          type="box"
                        />
                      </Col>
                    ))}
                  </Row>

                  {/* <JobsCarouselv2 jobs={otherJobs?.slice(0, 5)} /> */}
                </span>
              </span>
            </span>
            {/* 
            <span className="content-box first">
              <span className="content-section">
                <span className="content-block">
                  <h6 className="block-title company-page-heading thick-title">
                    Other jobs by this company
                  </h6>
                  <p></p>
                  <Row
                    gutter={16}
                    style={{ margin: "0 auto", width: "100%" }}
                    justify={`${
                      otherJobs?.length === 4 ? "space-around" : "flex-start"
                    }`}
                  >
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
                  </Row>
                </span>
              </span>
            </span> */}
          </>
        )}
      </div>
    </div>
  );
}

export default React.memo(JobDetails);
