import React from "react";
import { useHistory } from "react-router";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Button from "../../shared-ui/Button/Button";
import "./_EmployerAndAgency.scss";
import "./_Responsive.scss";

const EmployerAndAgency = () => {
  return (
    <div className="emp-agncy-main">
      {" "}
      <div className="c-containers">
        <div className="c-row">
          <div className="cell-half">
            <h1 className="emp-heading">
              Descover a new way of hiring <br /> & make the right connection
            </h1>
          </div>
          <div className="cell-half job-n-demo">
            <Button className="blue mr-3">Post a free job</Button>
            <Button className="green">Book a demo</Button>
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row">
          <div className="cell-auto text-section">
            <h1>
              Save up to 75% of your <br />
              annual recruiment budget
            </h1>
            <p>
              Finding the right person can be costly and we can help you minimise those costs. Start your search with 2
              free jobs on us.
            </p>
          </div>
          <div className="cell-auto image-section">
            <img src={require("../../assets/images/employeeandagency/user-cards.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row column-rev ">
          <div className="cell-auto image-section">
            <img src={require("../../assets/images/employeeandagency/Mask Group 37.png")} alt="" />
          </div>
          <div className="cell-auto text-section">
            <h1>
              Save up to 75% of your <br />
              annual recruiment budget
            </h1>
            <p>
              Finding the right person can be costly and we can help you minimise those costs. Start your search with 2
              free jobs on us.
            </p>
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row">
          <div className="cell-auto text-section">
            <h1>
              Save up to 75% of your <br />
              annual recruiment budget
            </h1>
            <p>
              Finding the right person can be costly and we can help you minimise those costs. Start your search with 2
              free jobs on us.
            </p>
          </div>
          <div className="cell-auto image-section">
            <img src={require("../../assets/images/employeeandagency/team-table.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="c-containers sections">
        <div className="c-row column-rev ">
          <div className="cell-auto image-section">
            <img src={require("../../assets/images/employeeandagency/interview.png")} alt="" />
          </div>
          <div className="cell-auto text-section">
            <h1 className="blue">Comming soon...</h1>
            <h1>
              Save up to 75% of your <br />
              annual recruiment budget
            </h1>
            <p>
              Finding the right person can be costly and we can help you minimise those costs. Start your search with 2
              free jobs on us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerAndAgency;
