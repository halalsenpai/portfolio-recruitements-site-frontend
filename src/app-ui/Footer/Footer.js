import React from "react";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/images/logo/logo-md.png";

function Footer() {
  return (
    <div className="c-footer">
      <span className="shadow-box"></span>
      <span className=" inner-container ">
        <div className="container-lg container-fluid d-flex flex-wrap">
          <ul className="info">
            <img className="logo" src={LogoImage} alt="Logo" />
            <span>
              <p className="mb-4">
                Jobsmideast.com is the smartest job site in the Middle East. Our
                amazing team consists of some of the most experienced and
                talented developers, social media executives and account
                managers on the market, with years of experience in different
                sectors to make your experience more efficient & effortless.{" "}
                <br />
                <br /> We are the only job site in the Middle East that offers
                our clients a job platform + CRM + inbox & live chat all in one
                package. To book a demo with one of our account managers click
                below.
              </p>
            </span>
          </ul>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/services">Services</Link>
            {/* <Link to="/">Report a problem</Link> */}
          </ul>
          <ul>
            <Link to="/job-seekers">Job seekers</Link>
            <Link to="/jobs">Job</Link>
            <Link to="/employee-and-agency">Employer & Agencies</Link>
          </ul>
          <ul>
            {/*<Link>
              <h3 className="blue">Employers & Agencies</h3>
            </a> */}
            <Link to="/pricing">Pricing</Link>
            <Link to="/terms-and-condition">T&C's</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
            <Link to="cookie-policy">Cookie policy</Link>
          </ul>
          <ul>
            <Link to="/">
              <h3>Head Office </h3>
            </Link>
            <p>
              Buckinghamshire <br /> United Kingdom
            </p>
            <a href="mailto:enquiries@jobsmideast.com" className="mt-4">
              enquiries@jobsmideast.com
            </a>
          </ul>
        </div>
      </span>
      <div className="footer-bottom">
        Copyright © 2021 Jobsmideast Ltd (<a>Jobsmideast.com</a>) Inc. All
        rights reserved.
        <br />
        <a>Terms of use </a>| <a>Privacy policy </a>- Company number 13283704{" "}
      </div>
    </div>
  );
}

export default Footer;
