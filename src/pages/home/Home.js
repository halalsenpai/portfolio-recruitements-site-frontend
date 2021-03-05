import React from 'react';
import CBannerWithImages from '../../uiComponents/shared/CBannerWithImages/CBannerWithImages';
import CButton from '../../uiComponents/shared/CButton/CButton';
import Fade from 'react-reveal/Fade';
function Home() {
    return (
        <div className="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 first-banner-heading-container">
                        <span className="inner-container">
                            <Fade left>
                                <h2 className="main-heading">THE <mark>SMARTEST </mark> JOBSITE IN THE MIDDLE EAST.</h2>
                                <h5 className="sub-heading color-text">You asked, we delivered.</h5>
                                <p className="pr-4 mb-4">We asked a 100 companies, and 1000 job seekers what they struggle with  when searching on job sites, and we got the answers, so we built the smartest  and the most advanced recruitment platform, free to use for everyone across the globe!</p>
                                <CButton className="mt-4" type={'large'}>Get Started <img className="ml-2" src={require('../../assets/images/icons/right-arrow-icon.svg')} alt="->" /></CButton>
                            </Fade>
                        </span>
                    </div>
                    <div className="col-lg-6 p-0">
                        <CBannerWithImages />
                    </div>
                </div>
            </div>
            <div className="c-container-centered-content  mb-2 small">
                <h2 className="main-heading">
                    Employers, agencies, jobseekers,</h2>
                <h5>connected in one platform.</h5>
            </div>
            <div className="container-fluid p-0">
                <img className="w-100" src={require('../../assets/images/home/ban-hm3.png')} alt="" />
            </div>
            <div className="container">
                <div className="c-container-centered-content mt-0 mb-0">
                    <div className="ea-container">
                        {/* <h4 className="b-text">Employers & Agencies</h4> */}
                        <span className="inner-container">
                            <Fade bottom duration={1500}>
                                <div className="box">
                                    <img src={require('../../assets/images/icons/ea/ea-1.svg')} alt="img" />
                                    <span>
                                        <h3 className="b-text">Free CRM</h3>
                                        <p>Built in CRM with drag and Drop function</p>
                                    </span>
                                </div>
                                <div className="box">
                                    <img src={require('../../assets/images/icons/ea/ea-2.svg')} alt="img" />
                                    <span>
                                        <h3 className="b-text">Save up to 75%</h3>
                                        <p>Save up to 75% of to your annual recruitment budget</p>
                                    </span>
                                </div>
                                <div className="box">
                                    <img src={require('../../assets/images/icons/ea/ea-3.svg')} alt="img" />
                                    <span>
                                        <h3 className="b-text">Direct chat + Inbox</h3>
                                        <p>Connect with candidates direct, no more emails!</p>
                                    </span>
                                </div>
                                <div className="box">
                                    <img src={require('../../assets/images/icons/ea/ea-4.svg')} alt="img" />
                                    <span>
                                        <h3 className="b-text">Candidate Match</h3>
                                        <p>Set accurate filters and let the system find you job seekers!</p>
                                    </span>
                                </div>
                            </Fade>
                        </span>
                    </div>
                </div>
            </div>
            <div className="c-container-centered-content small  mb-2">
                <h2 className="main-heading">
                    Keep everything in one place.</h2>
                <h5>Interviews, calls, connections and more.</h5>
            </div>

            <div className="container-fluid p-0">
                <img className="w-100" src={require('../../assets/images/home/ban-4-hm.jpg')} alt="" />
            </div>
            <div className="container">

                <div className="c-container-centered-content mt-0">
                    <div className="ea-container primary mt-0">
                        {/* <h4 className="b-text">Looking for a new job?</h4> */}
                        <span className="inner-container">
                            <Fade bottom duration={1500}>
                                <div className="box">
                                    <img src={require('../../assets/images/icons/ma/ma-1.svg')} alt="img" />
                                    <span>
                                        <h3 className="b-text">One click apply</h3>
                                        <p>Short list jobs and apply All to  them  with 1 click</p>
                                    </span>
                                </div>
                                <div className="box">
                                    <img src={require('../../assets/images/icons/ma/ma-2.svg')} alt="img" />
                                    <span>
                                        <h3 className="b-text">Job Match</h3>
                                        <p>Let our system do the work for you even while you sleep!</p>
                                    </span>
                                </div>
                                <div className="box">
                                    <img src={require('../../assets/images/icons/ma/ma-3.svg')} alt="img" />
                                    <span>
                                        <h3 className="b-text">Direct chat + Inbox</h3>
                                        <p>Talk to employers & agencies in real time, no emails!</p>
                                    </span>
                                </div>
                                <div className="box">
                                    <img src={require('../../assets/images/icons/ma/ma-4.svg')} alt="img" />
                                    <span>
                                        <h3 className="b-text">Follow Companies</h3>
                                        <p>Follow companies and stay up to date with all their jobs</p>
                                    </span>
                                </div>
                            </Fade>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Home;
