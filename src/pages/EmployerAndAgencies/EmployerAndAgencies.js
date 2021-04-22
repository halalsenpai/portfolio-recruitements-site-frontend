import React from "react";
import CButton from "../../uiComponents/shared/CButton/CButton";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { useHistory } from "react-router";

function EmployerAndAgencies() {
  const history = useHistory();
  return (
    <div className="container-fluid employer-and-agencies">
      <div className="row banner">
        <div className="col-lg-6  c-container-centered-content left-text-container mb-2">
          <Bounce left>
            <div className="inner-container">
              <h2>
                Discover a new way of hiring & make the right connections.
              </h2>
            </div>
          </Bounce>
        </div>
        <div className="col-lg-6 c-container-centered-content right-text-container mb-2">
          <Bounce right>
            <CButton
              onClick={() => history.push("/signup")}
              type="large"
              htmlType="submit"
              // loading={tr`ue}
              themeColor="primary"
              block
            >
              Post a free job
            </CButton>
          </Bounce>
        </div>
      </div>
      <div className="row banner">
        <div className="col-lg-5 left-text-container">
          <Slide left>
            <div className="inner-container">
              <h2 className="mt-4">
                Save up to 75% of your <br /> annual recruitment budget
              </h2>
              <p>
                Finding the right person can be costly, and we can help you{" "}
                <br /> minimise those costs. Start your search with 2 free jobs
                and try <br /> us out with no strings attached.
              </p>
            </div>
          </Slide>
        </div>
        <div className="col-lg-7 p-0">
          <img
            className="banner-img"
            src={require("../../assets/images/employeeandagency/ea-1.jpg")}
            alt="ban1"
          />
        </div>
      </div>
      <div className="row banner">
        <Slide left>
          <div className="col-lg-7 p-0">
            <img
              className="banner-img"
              src={require("../../assets/images/employeeandagency/ea-2.png")}
              alt="ban1"
            />
          </div>
        </Slide>
        <div className="col-lg-5 right-text-container">
          <h2 className="mt-4">Smart profiles</h2>
          <p>
            We show you profiles, not CV's. Connect with job seekers through
            their smart profiles, and get to know them through video
            introductions.{" "}
          </p>
        </div>
      </div>
      <div className="row banner">
        <div className="col-lg-5 left-text-container">
          <div className="inner-container">
            <h2 className="mt-4">Video questionnaire's</h2>
            <p>
              Write your interview questions, set a time for each answer, and
              fire away! Candidates can then answer each question in a video
              format, and once their done it comes back straight into your
              online inbox.
            </p>
          </div>
        </div>
        <div className="col-lg-7 p-0">
          <img
            className="banner-img"
            src={require("../../assets/images/employeeandagency/ea-4.jpg")}
            alt="ban1"
          />
        </div>
      </div>
      <div className="row banner">
        <Slide left>
          <div className="col-lg-8 p-0">
            <img
              className="banner-img"
              src={require("../../assets/images/employeeandagency/ea-3.jpg")}
              alt="ban1"
            />
          </div>
        </Slide>
        <div className="col-lg-4 right-text-container">
          <h2 className="mt-4"> Keep your team connected </h2>
          <p>
            However big or small, you can add your entire team here. Make notes
            on profiles only visible to you and your team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployerAndAgencies;
