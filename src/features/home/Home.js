import React from "react";
import { useHistory } from "react-router";

import Fade from "react-reveal/Fade";

import Button from "../../shared-ui/Button/Button";
import BannerWithImages from "../../shared-ui/BannerWithImages/BannerWithImages";

import "./_Home.scss";
import "./_Responsive.scss";

function Home() {
  const history = useHistory();
  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <div className="row banner-spacing">
            <div className="col-lg-6 first-banner-heading-container">
              <span className="inner-container">
                {/* <Fade delay={300} bottom duration={1200}> */}
                {/* <div> */}
                <Fade bottom>
                  <h2 className="main-heading">
                    THE{" "}
                    <span className="banner-heading-highlight">SMARTEST </span>{" "}
                    JOB SITE
                  </h2>
                  <h2 className="main-heading">IN THE MIDDLE EAST.</h2>
                </Fade>

                <Fade bottom delay={500}>
                  <h5 className="sub-heading color-text">
                    Be the best. Find the best. Choose the best.
                  </h5>
                </Fade>

                <Fade bottom delay={500}>
                  <p className="banner-content mobile-textalign">
                    We asked 97 companies, and 1000 job seekers what they
                    struggle with when searching on job sites, and we got the
                    answers, so we built the smartest and the most advanced
                    recruitment platform, free to use for everyone across the
                    globe!
                  </p>
                </Fade>

                <Fade bottom delay={700}>
                  <div>
                    <Button
                      onClick={() => history.push("/signup")}
                      className="mt-4 mb-3 button-center get-started-btn"
                      themeColor="blue"
                      type={"large"}>
                      Get Started{" "}
                      <img
                        className="animated-icon"
                        src={require("../../assets/images/icons/right-arrow-icon.svg")}
                        alt="->"
                      />
                    </Button>
                    <p className="small-txt mobile-textalign">
                      Join us for free. Launch date: June 2021.
                    </p>
                  </div>
                </Fade>
                {/* </div> */}
                {/* </Fade> */}
              </span>
            </div>

            <Fade bottom duration={1200} delay={300}>
              <div className="col-lg-6 p-0 margin-mobile">
                <BannerWithImages className="c-banner-responsive" />
              </div>
            </Fade>
          </div>
        </div>

        <Fade bottom duration={1200}>
          <div>
            <div className="home-content-container">
              <h2 className="main-heading">EMPLOYERS, AGENCIES, JOBSEEKERS,</h2>
              <h5 className="mobile-textalign">connected in one platform.</h5>
            </div>

            <div className="container-fluid p-0 d-flex justify-content-center">
              <img
                className="w-75 img-mobile"
                src={require("../../assets/images/home/1-homepage.png")}
                alt=""
              />
            </div>
          </div>
        </Fade>
        <div className="container-benefit">
          <Fade bottom duration={1200}>
            <div className="inner-container">
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ea/ea-1.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="a-text">Free CRM</h3>
                  <p>
                    Stay connected with your <br /> entire team.
                  </p>
                </span>
              </div>

              <div className="box">
                <img
                  src={require("../../assets/images/icons/ea/ea-2.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="a-text">Save up to 75%</h3>
                  <p>
                    Save up to 75% of <br /> your annual recruitment budget
                  </p>
                </span>
              </div>
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ea/ea-3.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="a-text">Direct chat + Inbox</h3>
                  <p>
                    Keep all your conversations in <br /> one place.
                  </p>
                </span>
              </div>
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ea/ea-4.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="a-text">Candidate Match</h3>
                  <p>
                    Find the suitable person for the <br /> job in a few clicks.
                  </p>
                </span>
              </div>
            </div>
          </Fade>
        </div>
        {/* <div className="space"></div> */}
        <Fade bottom duration={1200}>
          <div>
            <div className="home-content-container">
              <h2 className="main-heading">KEEP EVERYTHING IN ONE PLACE.</h2>
              <h5 className="mobile-textalign">
                interviews, calls, connections and more.
              </h5>
            </div>
            {/* <div className="space"></div> */}

            <div className="container-fluid p-0 d-flex justify-content-center">
              <img
                className="w-75 img-mobile"
                src={require("../../assets/images/home/8.png")}
                alt=""
              />
            </div>
          </div>
        </Fade>
        <div className="space"></div>
        <div className="container-filters">
          <Fade bottom duration={1200}>
            <span className="inner-container">
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ma/ma-1.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="b-text">One click apply</h3>
                  <p>Shortlist jobs and apply to all of them with 1 click</p>
                </span>
              </div>

              <div className="box">
                <img
                  src={require("../../assets/images/icons/ma/ma-2.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="b-text">Job Match</h3>
                  <p>
                    Let our system do the work for you even while you sleep!
                  </p>
                </span>
              </div>
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ma/ma-3.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="b-text">Direct chat + Inbox</h3>
                  <p>Talk to employers & agencies in real time, no emails!</p>
                </span>
              </div>
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ma/ma-4.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="b-text">Follow Companies</h3>
                  <p>
                    Follow companies and stay up to date with all their jobs
                  </p>
                </span>
              </div>
            </span>
          </Fade>
        </div>
        <div className="container-fluid bottom-container">
          {/* <Fade bottom duration={1000}> */}
          <div className="row">
            <div className="padding-mobile bottom-text-section col-lg-4 text-column ">
              <img
                className="bottom-logo"
                src={require("..//..//assets/images/logo/logo-md.png")}
                alt=""
              />

              <span className="small-paragraph">
                <p>
                  Jobsmideast.com is the most advanced job platform in the
                  Middle East. We understand the problems individuals face on
                  daily basis when searching for the right role, or finding the
                  suitable candidate to join their team, and we are forever
                  changing the way employers, job seekers & agencies connect.
                </p>

                <p>
                  Our creative team consists of some of the most talented and
                  experienced web developers, recruitment consultants, social
                  media specialists and client account managers to make your
                  Jobsmideast experience efficient, effortless and enjoyable.
                  Client service is at the heart of our operation and it’s our
                  number 1 priority here at Jobsmideast.
                </p>

                <p>
                  Jobsmideast.com will be operating in Bahrain, Egypt, Kuwait,
                  Oman, Qatar, Saudi Arabia & United Arab Emirates providing the
                  most advanced recruitment tools, communication systems and API
                  capabilities which will cater for 38 sectors and over 439 sub
                  sectors.
                </p>
              </span>
              <Button className="demo-btn" themeColor="blue">
                <a
                  className="book-a-demo-btn"
                  href="https://calendly.com/jobsmideast/demo?month=2021-04&back=1">
                  Book a Demo
                </a>
              </Button>
            </div>

            <div className="col-lg-8 p-0 d-flex align-items-center">
              <div className="container-fluid p-0 d-flex justify-content-center">
                <img
                  className="w-100 safari-fix"
                  src={require("../../assets/images/home/20778407.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </>
  );
}

export default Home;
