import React, { useEffect, useRef, useState } from "react";

import { Input, Form, Empty, Spin } from "antd";

import { transformJobData } from "./transformers";
import Button from "../../shared-ui/Button/Button";
import { MappedElement } from "../../utils/helper";
import JobCard from "../../shared-ui/JobCard/JobCard";
import JobFilter from "../../app-ui/JobFilter/JobFilter";
import JobDetails from "../../app-ui/JobDetails/JobDetails";
import searchIcon from "../../assets/images/icons/search_icon.svg";
import locationIcon from "../../assets/images/icons/location_icon.svg";
import filterIcon from "../../assets/images/icons/filter_icon.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getJob,
  getAccommodation,
  getCity,
  getCountry,
  getEmploymentType,
  getFieldOfStudy,
  getGrade,
  getJobTitle,
  getQualification,
  getJobByCategory,
  getJobsByCompany,
} from "./thunk";
import { selectJobs, selectStatus } from "./slice";
import {
  selectCountries,
  selectEmploymentTypes,
  selectJobTitles,
  selectAccommodations,
  selectOtherJobs,
  selectOtherJobsByCompany,
} from "./slice";

import "./_Jobs.scss";
import "./_Responsive.scss";

function Jobs() {
  const myRef = useRef(null);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectStatus);
  const jobTitles = useAppSelector(selectJobTitles);
  const employmentTypes = useAppSelector(selectEmploymentTypes);
  const countries = useAppSelector(selectCountries);
  const jobs = useAppSelector(selectJobs);
  const accommodations = useAppSelector(selectAccommodations);
  const otherJobs = useAppSelector(selectOtherJobs);
  const otherJobsByCompany = useAppSelector(selectOtherJobsByCompany);
  const [jobDetails, setJobDetails] = useState(null);
  const [filter, setFilter] = useState(false);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [categoryId, setcategoryId] = useState(null);
  const [companyId, setcompanyId] = useState(null);
  const [queryParams, setQueryParams] = useState({
    page: 1,
    limit: 100,
  });

  useEffect(() => {
    dispatch(getJob());
    dispatch(getJobTitle());
    dispatch(getEmploymentType());
    dispatch(getCountry());
    dispatch(getCity());
    dispatch(getQualification());
    dispatch(getFieldOfStudy());
    dispatch(getGrade());
    dispatch(getAccommodation());
  }, []);

  useEffect(() => {
    dispatch(getJob({ qs: queryParams }));
  }, []);

  useEffect(() => {
    dispatch(getJobByCategory(categoryId));
  }, [categoryId]);

  useEffect(() => {
    dispatch(getJobsByCompany(companyId));
  }, [companyId]);

  useEffect(() => {
    if (jobs.length) {
      setJobDetails(jobs[0]);
      setcategoryId(jobs[0].categoriesId);
      setcompanyId(jobs[0].companyId);
    }
  }, [jobs]);

  let ShowFilter = () => {
    setFilter(!filter);
  };
  const executeScroll = () =>
    myRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  const onSearchJob = (values) => {
    const qs = { ...queryParams, ...values };
    setQueryParams(qs);
    dispatch(getJob({ qs }));
  };

  // const onFinish = () => {};

  return (
    <div className="jobs-page">
      <div className="jobs-wrapper">
        <JobFilter show={filter} onHide={ShowFilter} />

        {/* Job List */}
        <div className="find-jobs-section">
          {isLoading && (
            <div className="preloader">
              <Spin />
            </div>
          )}

          <Form onFinish={onSearchJob}>
            <span className="form-fields job-filter-section">
              <Form.Item name="jobTitleName" className="c-input c-input-with-icon">
                <Input
                  size="small"
                  className="xs"
                  type="text"
                  placeholder="Job title"
                  prefix={<img className="input-icon" src={searchIcon} alt="ico" />}></Input>
              </Form.Item>
              <Form.Item name="location" className="c-input c-input-with-icon">
                <Input
                  size="small"
                  className="xs"
                  type="text"
                  placeholder="Location"
                  prefix={<img className="input-icon" src={locationIcon} alt="ico" />}></Input>
              </Form.Item>
              <Button type="small" htmlType="submit" themeColor="outlined" style={{ height: "32px", margin: "0 8px" }}>
                Search
              </Button>

              <div style={{ marginLeft: "8px" }} className="filters" onClick={ShowFilter}>
                <img className="filter-icon" src={filterIcon} alt="ico" />
              </div>
            </span>
          </Form>

          <div className="jobs-list">
            {!jobs.length && <Empty description={"No jobs"} />}

            <MappedElement
              data={jobs}
              renderElement={(obj, index) => {
                return (
                  <JobCard
                    key={index}
                    onClick={() => {
                      setJobDetails(obj);
                      setcategoryId(obj.categoriesId);
                      setcompanyId(obj.companyId);
                    }}
                    job={transformJobData(obj, jobTitles, employmentTypes, countries)}
                  />
                );
              }}
            />
          </div>
        </div>

        {/* Job Detail */}
        <div ref={myRef} className={`job-details ${showJobDetails && "job-details-show"}`}>
          {isLoading && (
            <div className="preloader">
              <Spin />
            </div>
          )}

          {!jobDetails && <Empty description={"please select a job"} />}

          {jobDetails && (
            <JobDetails
              otherJobs={otherJobs}
              data={transformJobData(jobDetails, jobTitles, employmentTypes, countries)}
              extraData={{ accommodations }}
              setJobDetails={setJobDetails}
              executeScroll={executeScroll}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
