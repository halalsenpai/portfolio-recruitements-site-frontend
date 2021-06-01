import React from "react";
import Button from "../../shared-ui/Button/Button";
import { FaCheckCircle } from "react-icons/fa";
import "./_Pricing.scss";
import "./_Responsive.scss";
import { HiCheck } from "react-icons/hi";
import video from "../../assets/videos/Inbox Video.mp4";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="heading-section">
        <p>Choose the plan that's right for your business</p>
      </div>
      <div className="pricing-main">
        <div className="pricing-section">
          <div className="pricing-row">
            <div className="pricing-card ">
              <div className="pricing-header">
                <div className="top-items-head"></div>
                <div className="top-items-head color-blue"></div>
              </div>
              <div className="pricing-items">
                <div className="pricing-typs">Duration</div>
                <div className="pricing-typs">Profile view</div>
                <div className="pricing-typs">Contact credits</div>
                <div className="pricing-typs">Direct chat</div>
                <div className="pricing-typs">Calling features</div>
                <div className="pricing-typs">Video questionare</div>
                <div className="pricing-typs">Add team members</div>
                <div className="pricing-typs">Customer support</div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <div className="top-items-head">VIP package</div>
                <div className="top-items-head color-blue">€0</div>
              </div>
              <div className="pricing-items">
                <div className="pricings">14 day</div>
                <div className="pricings">100</div>
                <div className="pricings">5</div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <div className="top-items-head">Standard ad</div>
                <div className="top-items-head color-blue">€300</div>
              </div>
              <div className="pricing-items">
                <div className="pricings">30 days</div>
                <div className="pricings">Unlimited</div>
                <div className="pricings">20</div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <div className="top-items-head">Job bundle</div>
                <div className="top-items-head color-blue">€1000</div>
              </div>
              <div className="pricing-items">
                <div className="pricings">30 day</div>
                <div className="pricings">Unlimited</div>
                <div className="pricings">100</div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="pricings">
                  <FaCheckCircle className="check-icon" />
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <div className="top-items-head">VIP package</div>
                <div className="top-items-head color-blue">Customize</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-image">
          <div className="image-section">
            <img src={require("../../assets/images/pricing/an-african-friends_197531-3755.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="pricing-details">
        <div className="video-section">
          <div class="box">
            <video autoPlay loop="" muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="buy-premuim">
          <h1 className="desc">
            Get more out of your job search by contacting decision makers <br /> <span>DIRECTLY.</span>
          </h1>
          <h1 className="premium-heading">Premium account benefits:</h1>
          <p className="points">- Message companies key decision makers directly</p>
          <p className="points">- Contact up to 20 companies of your choice per month -</p>
          <p className="points">- Follow your favorite companies and stay up to date with all of their jobs</p>
          <div className="btn-sec">
            <Button>7.99 per month</Button> <p>No contracts, cancel at any time!</p>
          </div>
          <p className="direct-message">Direct messaging a company maximises your chances by up to 80%!</p>
        </div>
      </div>
      <div className="interview">
        <div className="interview-details">
          <h1 className="coming-soon">Coming soon...</h1>
          <h1 className="make-interview">Make your interviews personal, without even being there!</h1>
          <p>
            Our video platform allows you to attend your interviews even if you're not there! Simply write your
            interview questions, record them as voice notes, or record them as a video.{" "}
          </p>
          <p>
            You can then save them as templates, and send them out to up to 200 people per month, and recieve your
            answers back in video format! <br /> You can export all videos, or share them with team members for updates
            and reviews.
          </p>
          <div className="points">
            <div className="checks">
              <HiCheck />
            </div>
            <p>Number of questions: 10</p>
          </div>
          <div className="points">
            <div className="checks">
              <HiCheck />
            </div>
            <p>Video allowance: 30 secs minimum and up to 5 minutes per video answer</p>
          </div>
          <div className="points">
            <div className="checks">
              <HiCheck />
            </div>
            <p>Users per account: 3</p>
          </div>
          <div className="points">
            <div className="checks">
              <HiCheck />
            </div>
            <p>Number of questionnaries per month: 200 </p>
          </div>
          <div className="points">
            <div className="checks">
              <HiCheck />
            </div>
            <p>Site integration: Yes</p>
          </div>
        </div>
        <div className="interview-image">
          <img src={require("../../assets/images/pricing/interview.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
