import React from 'react'
import CButton from '../../uiComponents/shared/CButton/CButton'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
function EmployerAndAgencies() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 c-container-centered-content small mb-0 mt-2">
                    <Bounce left >
                        <h2 >
                            Discover a new way of hiring & make the right connections.
                        </h2>
                    </Bounce>
                </div>
                <div className="col-lg-4 c-container-centered-content small mb-0 mt-2">
                    <Bounce right >
                        <CButton
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
            <div className="row">

                <div className="col-lg-5 c-container-centered-content  align-items-start mt-0">
                    <h4 className="mt-4">
                        Save up to 75% of your <br /> annual recruitment budget
                     </h4>
                    <p>
                        Finding the right person can be costly, and we can help you <br /> minimise those costs. Start your search with 2 free jobs and try <br /> us out with no strings attached.
                    </p>
                </div>
                <div className="col-lg-7 c-container-centered-content mt-0">
                    <Bounce>
                        <img className="right-image lg-rad" src={require('../../assets/images/employeeandagency/ea-1.jpg')} alt="ban1" />
                    </Bounce>
                </div>
            </div>
            <div className="row">
                <Slide left>
                    <div className="col-lg-8 c-container-centered-content">
                        <img className="lg" src={require('../../assets/images/employeeandagency/ea-2.png')} alt="ban1" />
                        <div className="img-back-cover"></div>
                    </div>
                </Slide>
                <div className="col-lg-4 c-container-centered-content align-items-start">
                    <h4 className="mt-4">
                        Smart profiles
                     </h4>
                    <p>
                        We show you profiles, not CV's. Connect with job <br /> seekers through their smart profiles, and get to<br /> know them through video introductions.                     </p>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-4 c-container-centered-content align-items-start">
                    <h4 className="mt-4">
                        Video questionnaire's
                     </h4>
                    <p>
                        Write your interview questions, set a time for each answer, and fire away! Candidates can  then answer each question in a video format,  and once their done it comes back straight into your online inbox.
                    </p>
                </div>
                <Zoom left>
                    <div className="col-lg-8 c-container-centered-content">
                        <img className="right-image lg" src={require('../../assets/images/employeeandagency/ea-4.jpg')} alt="ban1" />

                    </div>
                </Zoom>
            </div>
            <div className="row">
                <Slide left>
                    <div className="col-lg-8 c-container-centered-content">
                        <img className="lg" src={require('../../assets/images/employeeandagency/ea-3.jpg')} alt="ban1" />
                        <div className="img-back-cover"></div>
                    </div>
                </Slide>
                <div className="col-lg-4 c-container-centered-content align-items-start">
                    <h4 className="mt-4"> Keep your team connected  </h4>
                    <p>
                        However big or small, you can add your entire team here. Make notes on profiles only visible to you and your team.
                    </p>
                </div>
            </div>
        </div >

    )
}

export default EmployerAndAgencies
