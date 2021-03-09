import React from 'react'
import CButton from '../../uiComponents/shared/CButton/CButton'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
function JobSeekers() {
    return (
        <div className="container-fluid job-seeker-page">
            <div className="row banner">
                <div className="col-lg-6  c-container-centered-content left-text-container mb-2">
                    <Bounce left >
                        <div className="inner-container">
                            <h2>
                                Make the right connections.
                            </h2>
                        </div>
                    </Bounce>
                </div>
                <div className="col-lg-6 c-container-centered-content right-text-container mb-2">
                    <Bounce right >
                        <CButton
                            type="large"
                            htmlType="submit"
                            // loading={tr`ue}
                            themeColor="primary"
                            block
                        >
                            Get started
                </CButton>
                    </Bounce>
                </div>
            </div>
            <div className="row banner">
                <div className="col-lg-5 left-text-container">
                <Slide left>
                        <div className="inner-container">
                    <h2 className="mt-4">
                        Follow companies
                     </h2>
                    <p>
                        Follow your favourite companies and stay up to date <br />with all of their current and future jobs.                    </p>
                        </div>
                    </Slide>
                </div>
                <div className="col-lg-7 p-0">
                        <img className="banner-img" src={require('../../assets/images/jobseekers/js-1.jpg')} alt="ban1" />
                </div>
            </div>
            <div className="row banner">
                <Slide left>
                    <div className="col-lg-7 p-0">
                        <img className="banner-img" src={require('../../assets/images/jobseekers/js-2.jpg')} alt="ban1" />
                    </div>
                </Slide>
                <div className="col-lg-5 right-text-container">
                    <h2 className="mt-4">
                        Live chat + inbox
                                         </h2>
                    <p>
                        Connect with employers and agencies and keep your conversations in one place.                                         </p>
                </div>

            </div>
            <div className="row banner">
                <div className="col-lg-5 left-text-container">
                <div className="inner-container">
                    <h2 className="mt-4">
                        Smart profile
                            </h2>
                    <p>
                        Our smart profiles provide companies with all the info they need to maximize your employment opportunities.                    </p>
                    </div>
                </div>
                    <div className="col-lg-7 p-0">
                        <img className="banner-img" src={require('../../assets/images/jobseekers/js-3.jpg')} alt="ban1" />
                    </div>
            </div>
            <div className="row banner">
                <Slide left>
                    <div className="col-lg-8 p-0">
                        <img className="banner-img" src={require('../../assets/images/jobseekers/js-4.jpg')} alt="ban1" />
                    </div>
                </Slide>
                <div className="col-lg-4 right-text-container">
                    <h2 className="mt-4"> Smart interview features  </h2>
                    <p>
                        Interact with companies through our smart video questionnaires, it's almost like you're with them face to face!
                    </p>
                </div>
            </div>
        </div>

    )
}

export default JobSeekers;
