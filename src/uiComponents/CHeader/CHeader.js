import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/logo/logo-md.png";
import { useHistory, useLocation } from "react-router-dom";
import CButton from "../shared/CButton/CButton";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

function CHeader() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [menu, setMenu] = useState(false);

  const getActiveClassForPath = (currentLocation, path) => {
    return currentLocation === path ? "active b-text" : "";
  };

  return (
    <div className="c-header">
      <span className="inner-container">
        <Link to="/">
          <img className="logo" src={LogoImage} alt="Logo" />
        </Link>
        <nav className="menu">
          <Link to="/">Post a free job</Link>
          <Link
            to="/employee-and-agencies"
            onClick={() => setCurrentPath("/employee-and-agencies")}
            className={getActiveClassForPath(currentPath, "/employee-and-agencies")}>
            Employers & agencies
          </Link>
          <Link
            to="/job-seekers"
            onClick={() => setCurrentPath("/job-seekers")}
            className={getActiveClassForPath(currentPath, "/job-seekers")}>
            Job Seekers
          </Link>
          <Link
            to="/jobs"
            onClick={() => setCurrentPath("/jobs")}
            className={getActiveClassForPath(currentPath, "/jobs")}>
            Jobs
          </Link>
          <Link to="/">Services</Link>
          <Link
            to="/pricing"
            onClick={() => setCurrentPath("/pricing")}
            className={getActiveClassForPath(currentPath, "/pricing")}>
            Pricing
          </Link>
        </nav>
        <div className={`mobile-menu ${menu ? "menu-open" : ""}`}>
          <Link
            to="/"
            onClick={() => {
              setCurrentPath("/");
              setMenu(false);
            }}>
            Post a free job
          </Link>
          <Link
            to="/employee-and-agencies"
            onClick={() => {
              setCurrentPath("/employee-and-agencies");
              setMenu(false);
            }}
            className={getActiveClassForPath(currentPath, "/employee-and-agencies")}>
            Employers & agencies
          </Link>
          <Link
            to="/job-seekers"
            onClick={() => {
              setCurrentPath("/job-seekers");
              setMenu(false);
            }}
            className={getActiveClassForPath(currentPath, "/job-seekers")}>
            Job Seekers
          </Link>
          <Link
            to="/jobs"
            onClick={() => {
              setCurrentPath("/jobs");
              setMenu(false);
            }}
            className={getActiveClassForPath(currentPath, "/jobs")}>
            Jobs
          </Link>
          <Link to="/">Services</Link>
          <Link
            to="/pricing"
            onClick={() => {
              setCurrentPath("/pricing");
              setMenu(false);
            }}
            className={getActiveClassForPath(currentPath, "/pricing")}>
            Pricing
          </Link>
          <Link
            to="/login"
            onClick={() => {
              setCurrentPath("/login");
              setMenu(false);
            }}
            className="login">
            Login
          </Link>
        </div>
        <nav className="align-items-center">
          <Link to="/login" className="login">
            Login
          </Link>
          <Link className="text-decoration-none" to="/signup">
            <CButton className="sign-up-btn">Sign Up</CButton>
          </Link>
          <button onClick={() => setMenu(!menu)} className="toggle-button">
            {menu ? (
              <VscChromeClose className="close-icon" size="25px" />
            ) : (
              <VscMenu className="menu-icon" size="25px" />
            )}
          </button>
        </nav>
      </span>
      <span className="shadow-box"></span>
    </div>
  );
}

export default CHeader;
