import React from 'react';
import CButton from '../../uiComponents/CButton/CButton';
import CSlider from '../../uiComponents/CSlider/CSlider';
import SampleCvSVG from './../../assets/images/cv-sample.svg';

function Home() {
    return (
        <div className="home">
            <div className="c-container">
                <div className="first-container mr-4">
                    <span>
                        <p className="main-heading">The <mark>smartest </mark>jobsite in the <br /><mark>Middle East</mark>.</p>
                        <p>People at the core of every interaction</p>
                    </span>
                    <CButton type={'large'}>View demo</CButton>
                </div>
                <div className="second-container ml-4">
                    <CSlider />
                </div>
            </div>
            <div className="c-container">
                <div className="ea-container">
                    <h3 className="b-text">Employers & Agencies</h3>
                    <span className="inner-container">
                        <div className="box">
                            <img src={require('../../assets/images/ea-1.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Free CRM</h3>
                                <p>Built in CRM with drag and Drop function</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/ea-2.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Save up to 75%</h3>
                                <p>Save up to 75% of to your<br /> annual recruitment budget</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/ea-3.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Direct chat + Inbox</h3>
                                <p>Connect with candidates direct,<br /> no more emails!</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/ea-4.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Candidate Match</h3>
                                <p>Set accurate filters and let the<br /> system find you job seekers!</p>
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div className="c-container">
                <img src={require('../../assets/images/home-ban-2.png')} alt="img" />
            </div>
            <div className="c-container">
                <div className="ea-container primary mt-0">
                    <h3 className="b-text">Looking for a new job?</h3>
                    <span className="inner-container">
                        <div className="box">
                            <img src={require('../../assets/images/ma-1.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">One click apply</h3>
                                <p>Short list jobs and apply All to  them <br /> with 1 click</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/ma-2.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Job Match</h3>
                                <p>Let our system do the work <br />for you even while you sleep!</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/ma-3.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Direct chat + Inbox</h3>
                                <p>Talk to employers & agencies in real time,<br /> no emails!</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/ma-4.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Follow Companies</h3>
                                <p>Follow companies and stay <br />up to date with all their jobs<br /></p>
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div className="c-container mb-0 pb-0 ">
                <div className="cv-container">
                    <img className="cv-sample" src={SampleCvSVG} alt="cv" />
                </div>
            </div>
        </div>
    );
}
export default Home;
