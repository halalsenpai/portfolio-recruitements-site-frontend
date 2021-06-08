import React from "react";
import { useHistory } from "react-router";

import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

import Button from "../../shared-ui/Button/Button";
import "./_JobSeekers.scss";
import "./_Responsive.scss";

function JobSeekers() {
  const history = useHistory();
  return (
    <div className="job-seekers-main">
      {" "}
      <div className="c-containers">
        <div className="c-row">
          <div className="auto-grow">
            <h1 className="emp-heading">Make the right connections.</h1>
          </div>
          <div className="cell-auto job-n-demo">
            <Button
              onClick={() => history.push("/signup")}
              type="large"
              className="blue">
              Get started
              <img
                className="animated-icon"
                src={require("../../assets/images/icons/right-arrow-icon.svg")}
                alt="->"
              />
            </Button>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 50 }} className="c-containers">
        <div className="c-row">
          <div className="align-left text-section auto-grow">
            <div>
              <h1>Follow companies</h1>
              <p>
                Follow your favourite companies and stay up to date with all of
                their current and future jobs.
              </p>
            </div>
          </div>
          <div className="cell-auto align-right image-section">
            <img
              className=""
              src={require("../../assets/images/jobseekers/Screen.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row column-rev">
          <div className="cell-auto align-left image-section">
            <img
              src={require("../../assets/images/jobseekers/chat.png")}
              alt=""
            />
          </div>
          <div className=" text-section auto-grow">
            <div>
              <h1>Live chat + inbox</h1>
              <p>
                Connect with employers and agencies and keep your conversations
                in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row">
          <div className=" align-left text-section auto-grow">
            <div>
              <h1>Smart profile</h1>
              <p>
                Our smart profiles provide companies with all the info they need
                to maximize your employment opportunities.
              </p>
            </div>
          </div>
          <div className="cell-auto align-right image-section">
            <img
              src={require("../../assets/images/jobseekers/profile.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row column-rev ">
          <div className="cell-auto align-left image-section">
            <img
              src={require("../../assets/images/jobseekers/laptop.png")}
              alt=""
            />
          </div>
          <div className=" text-section auto-grow">
            <div>
              <h1>Smart interview features</h1>
              <p>
                Interact with companies through our smart video questionnaires,
                it's almost like you're with them face to face!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSeekers;
