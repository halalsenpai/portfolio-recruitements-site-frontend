import React from "react";

import GoogleMapReact from "google-map-react";
import { BsHeart, BsStar } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";

import Button from "../Button/Button";
import ImagesGallery from "../ImagesGallery/ImagesGallery";
import JobsCarouselv2 from "../JobsCarousel/JobsCarouselv2";

function JobDetailsCard({ jobs, showAllDetails = true }) {
  return (
    <div className="c-job-detail-card">
      <div className="header">
        <img
          className="job-banner-img"
          src={require("../../assets/images/sample/job-banner.png")}
          alt="banner-img"
        />
        <span className="banner-img-overlay"></span>

        <span className="job-info-wrapper">
          <img
            className="job-img"
            src={require("../../assets/images/sample/jobimg-1.png")}
            alt=""
          />
          <span className="job-info">
            <h6 className="job-title">Join the largest group of schools</h6>
            <h3 className="job-company">THE EDUCATION COMPANY</h3>
            <p className="job-sector">Sector : Primary & Secondary Education</p>
          </span>
        </span>

        <Button themeColor="transparent small">View Jobs</Button>
      </div>

      <div className="job-details-wrapper">
        <span className="details-header">
          <h3 className="job-title">
            Job title: <mark className="title">Primary Teacher</mark>{" "}
          </h3>

          <span className="actions-wrapper">
            <Button themeColor="shadowed">Apply</Button>
            <Button themeColor="shadowed rounded">
              {" "}
              <BsHeart className="highlighted" />{" "}
            </Button>
            <Button themeColor="shadowed rounded">
              {" "}
              <BsStar className="highlighted" />{" "}
            </Button>
            <Button themeColor="shadowed rounded">
              {" "}
              <BiMessageRounded className="highlighted" />{" "}
            </Button>
          </span>
        </span>

        <span className="content-box first">
          <span className="content-section">
            <span className="content-block">
              <h6 className="block-title">Job brief</h6>
              <p className="block-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially{" "}
              </p>
            </span>

            <span className="content-block">
              <h6 className="block-title">Requirements</h6>

              <ul className="c-list">
                <li>Why do we use it?</li>
                <li>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </li>
                <li>
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here
                </li>
                <li>
                  m Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy. m
                  Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy.{" "}
                </li>
                <li>
                  arious versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like)
                </li>
              </ul>
            </span>
          </span>

          {showAllDetails && (
            <ul className="benefits-list">
              <li>
                <h6 className="title">Benefits</h6>
              </li>

              <li>
                {" "}
                <span className="">Salary</span>{" "}
                <span>
                  {" "}
                  <mark>12,000 AED/month</mark>{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="">Flights provided </span>{" "}
                <span>
                  {" "}
                  <mark>12,000 AED/month</mark>{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="">Family flights included</span>{" "}
                <span>
                  {" "}
                  <mark>Yes</mark>{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="">Tuition fees covered</span>{" "}
                <span>
                  {" "}
                  <mark>Yes</mark>{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="">Accommodation</span>{" "}
                <span>
                  {" "}
                  <mark>Single furnished</mark>{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="">Utility bills</span>{" "}
                <span>
                  {" "}
                  <mark>Paid for</mark>{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="">Visa provided</span>{" "}
                <span>
                  {" "}
                  <mark>Yes</mark>{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="">Gratuity bonus</span>{" "}
                <span>
                  {" "}
                  <mark>Yes</mark>{" "}
                </span>{" "}
              </li>
            </ul>
          )}
        </span>

        <span className="content-box">
          <span className="content-section">
            <span className="content-block">
              <h6 className="block-title">Jobs discription</h6>

              <p className="block-text">
                Why do we use it?
                <br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </span>

            <span className="content-block">
              <h6 className="block-title">Skills required</h6>

              <ul className="c-list">
                <li>Why do we use it?</li>
                <li>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </li>
                <li>
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here
                </li>
                <li>
                  m Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy. m
                  Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy.{" "}
                </li>
                <li>
                  arious versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like)
                </li>
              </ul>
            </span>

            {showAllDetails && (
              <>
                <span className="content-block">
                  <h6 className="block-title">
                    About company:{" "}
                    <mark className="ml-2 blue">Jobsmideast</mark>{" "}
                  </h6>

                  <p className="block-text">
                    Why do we use it? readable content of a page when looking at
                    its layout. The point of using Lorem It is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </p>
                </span>

                <ImagesGallery title="Company Photos" />

                <span className="content-block mt-4 pr-0">
                  <h6 className="block-title mb-3">Company Video </h6>

                  <div className="block-video">
                    <video className="w-100" controls>
                      <source
                        src={require("../../assets/videos/sample/sample-intro.mp4")}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </span>

                <span className="content-block mt-4 pr-0">
                  <h6 className="block-title mb-3">Map </h6>

                  <div className="block-video">
                    <div className="block-map">
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: "AIzaSyDxfSNbgNkKIDu45-aJdQpfHwMd7Dft3T4",
                        }}
                        defaultCenter={{
                          lat: 59.95,
                          lng: 30.33,
                        }}
                        defaultZoom={11}
                        yesIWantToUseGoogleMapApiInternals
                        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                      ></GoogleMapReact>
                    </div>
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
                  <h6 className="block-title">Other jobs in your sector</h6>

                  <div className="">
                    <JobsCarouselv2 jobs={jobs.slice(0, 5)} />
                    {/* <JobsCarousel jobs={jobs.slice(0, 4)} /> */}
                  </div>
                </span>
              </span>
            </span>

            <span className="content-box first">
              <span className="content-section">
                <span className="content-block">
                  <h6 className="block-title">Other jobs by this company</h6>

                  <div className="">
                    {/* <JobsCarousel jobs={jobs.slice(0, 4)} /> */}
                    <JobsCarouselv2 jobs={jobs.slice(0, 5)} />
                  </div>
                </span>
              </span>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default JobDetailsCard;
