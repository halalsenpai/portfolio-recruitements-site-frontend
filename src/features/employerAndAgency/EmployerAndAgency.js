import React from "react";
import { useHistory } from "react-router";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Button from "../../shared-ui/Button/Button";
import "./_EmployerAndAgency.scss";
import "./_Responsive.scss";
import { Link } from "react-router-dom";

const EmployerAndAgency = () => {
  const history = useHistory();
  return (
    <div className="emp-agncy-main">
      {" "}
      <div className="c-containers">
        <div className="c-row">
          <div className="cell-30">
            <div className="emp-heading">
              Discover a new way of hiring <br /> & make the right connections.
            </div>
          </div>
          <div className="cell-auto job-n-demo">
            <Button onClick={() => history.push("/login")} type="large" className="blue mr-4">
              Post a free job
            </Button>
            <Button
              onClick={() => window.open("https://calendly.com/jobsmideast/demo?month=2021-04&back=1")}
              type="large"
              className="green">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 50 }} className="c-containers">
        <div className="c-row">
          <div className="cell-30 align-left text-section">
            <div>
              <h1>
                Save up to 75% of your <br />
                annual recruiment budget
              </h1>
              <p>
                Finding the right person can be costly, and we can help you minimise those costs. Start your search with
                2 free jobs on us.
              </p>
            </div>
          </div>
          <div className="cell-auto align-right image-section">
            <img src={require("../../assets/images/employeeandagency/user-cards.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row column-rev">
          <div className="cell-auto align-left image-section">
            <img src={require("../../assets/images/employeeandagency/Mask Group 37.png")} alt="" />
          </div>
          <div className="cell-30 text-section">
            <div>
              <h1>Smart profiles</h1>
              <p>
                We show you profiles, not CV's. Connect with job seekers through their smart profiles, and get to know
                them through video introductions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row">
          <div className="cell-30 align-left text-section">
            <div>
              <h1>Keep your team connected</h1>
              <p>
                However big or small, you can add your entire team here. Make notes on profiles only visible to you and
                your team.
              </p>
            </div>
          </div>
          <div className="cell-auto align-right image-section">
            <img src={require("../../assets/images/employeeandagency/team-table.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row column-rev ">
          <div className="cell-auto align-left image-section">
            <img src={require("../../assets/images/employeeandagency/interview.png")} alt="" />
          </div>
          <div className="cell-30 text-section">
            <div>
              <h1 className="blue" style={{ letterSpacing: "3px" }}>
                COMING SOON...
              </h1>
              <h1>
                Make your interviews personal, <br /> without even being there!
              </h1>
              <p>
                Our video platform allows you to attend your interviews even if you're not there! Simply write your
                interview questions, record them as voice notes, or record them as a video.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerAndAgency;
