import React, { useEffect, useState } from "react";

import { Input, Form, Empty } from "antd";

import { transformJobData } from "./transformers";
import Button from "../../shared-ui/Button/Button";
import { MappedElement } from "../../utils/helper";
import JobCard from "../../shared-ui/JobCard/JobCard";
import JobFilter from "../../app-ui/JobFilter/JobFilter";
import JobDetails from "../../shared-ui/JobDetailsCard/JobDetailsCard";
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
} from "./thunk";
import { selectJobs } from "./slice";
import { selectCountries, selectEmploymentTypes, selectJobTitles, selectAccommodations } from "./slice";

import "./_Jobs.scss";
import "./_Responsive.scss";

function Jobs() {
  const dispatch = useAppDispatch();
  const jobTitles = useAppSelector(selectJobTitles);
  const employmentTypes = useAppSelector(selectEmploymentTypes);
  const countries = useAppSelector(selectCountries);
  const jobs = useAppSelector(selectJobs);
  const accommodations = useAppSelector(selectAccommodations);
  const [jobDetails, setJobDetails] = useState(null);
  const [filter, setFilter] = useState(false);
  const [showJobDetails, setShowJobDetails] = useState(false);

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
    if (jobs.length) {
      setJobDetails(jobs[0]);
    }
  }, [jobs]);

  let ShowFilter = () => {
    setFilter(!filter);
  };

  // const onFinish = () => {};

  return (
    <div className="jobs-page">
      <div className="jobs-wrapper">
        <JobFilter show={filter} onHide={ShowFilter} />

        <div className="find-jobs-section">
          <span className="form-fields job-filter-section">
            <Form.Item name="search" className="c-input c-input-with-icon">
              <img className="input-icon" src={require("../../assets/images/icons/search_icon.svg")} alt="" />
              <Input placeholder="Job title" size="small" className="xs" type="text"></Input>
            </Form.Item>
            <Form.Item name="location" className="c-input c-input-with-icon">
              <img className="input-icon" src={require("../../assets/images/icons/location_icon.svg")} alt="" />
              <Input placeholder="Location" size="small" className="xs" type="text"></Input>
            </Form.Item>
            <Button type="small" themeColor="outlined" style={{ height: "32px" }}>
              Search
            </Button>
            <div className="filters" onClick={ShowFilter}>
              <img className="filter-icon mt-2" src={require("../../assets/images/icons/filter_icon.svg")} alt="" />
            </div>
          </span>
          <div className="jobs-list">
            <MappedElement
              data={jobs}
              renderElement={(obj, index) => {
                return (
                  <JobCard
                    key={index}
                    onClick={() => {
                      setJobDetails(obj);
                    }}
                    job={transformJobData(obj, jobTitles, employmentTypes, countries)}
                  />
                );
              }}
            />
          </div>
        </div>
        <div className={`job-details ${showJobDetails ? "job-details-show" : ""}`}>
          {!jobDetails && <Empty description={"please select a job"} />}

          {jobDetails && (
            <JobDetails
              data={transformJobData(jobDetails, jobTitles, employmentTypes, countries)}
              extraData={{ accommodations }}
              setJobDetails={setJobDetails}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
