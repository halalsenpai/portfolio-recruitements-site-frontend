import React from 'react'
import CButton from '../../uiComponents/shared/CButton/CButton'

function JobSeekers() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 c-container-centered-content align-items-start small mb-0 mt-2">
                    <h2>
                            Make the right connections.
                     </h2>
                </div>
                <div className="col-lg-4 c-container-centered-content small mb-0 mt-2">
                    <CButton
                        type="large"
                        htmlType="submit"
                        // loading={tr`ue}
                        themeColor="primary"
                        block
                    >
                        Get started
                </CButton>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 c-container-centered-content  align-items-start">
                    <h4 className="mt-4">
                    Follow companies
                     </h4>
                    <p>
                    Follow your favourite companies and stay up to date <br/>with all of their current and future jobs.                    </p>
                </div>
                <div className="col-lg-5 c-container-centered-content ">
                    <img className="right-image lg-rad" src={require('../../assets/images/jobseekers/js-1.jpg')} alt="ban1" />

                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 c-container-centered-content">
                    <img  className="lg" src={require('../../assets/images/jobseekers/js-2.jpg')} alt="ban1" />
                    <div className="img-back-cover purple"></div>
                </div>
                <div className="col-lg-4 c-container-centered-content align-items-start">
                    <h4 className="mt-4">
                    Live chat + inbox
                                         </h4>
                    <p>
                    Connect with employers and agencies and keep your conversations in one place.                                         </p>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-4 c-container-centered-content align-items-start">
                    <h4 className="mt-4">
                    Smart profile             
                            </h4>
                    <p>
                    Our smart profiles provide companies with all the info they need to maximize your employment opportunities.                    </p>
                </div>
                <div className="col-lg-8 c-container-centered-content">
                    <img className="right-image lg" src={require('../../assets/images/jobseekers/js-3.jpg')} alt="ban1" />

                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 c-container-centered-content">
                    <img className="lg" src={require('../../assets/images/jobseekers/js-4.jpg')} alt="ban1" />
                    <div className="img-back-cover purple"></div>

                </div>
                <div className="col-lg-4 c-container-centered-content align-items-start">
                    <h4 className="mt-4"> Smart interview features  </h4>
                    <p>
                    Interact with companies through our smart video questionnaires, it's almost like you're with them face to face!
                    </p>
                </div>
            </div>
        </div>

    )
}

export default JobSeekers;
