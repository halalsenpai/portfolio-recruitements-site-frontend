import React from 'react'
import CButton from '../../uiComponents/shared/CButton/CButton'
import { FaCheckCircle } from 'react-icons/fa';

function Pricing() {
    return (

        <>
            <div className="pricing-main">

                <div className="pricing-section">

                    <div className="pricing-row">

                        <div className="pricing-card align-center">
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
                                <div className="top-items-head">
                                    VIP package

                                </div>
                                <div className="top-items-head color-blue">
                                    €0
                                </div>
                            </div>
                            <div className="pricing-items">
                                <div className="pricings">14 day</div>
                                <div className="pricings">100</div>
                                <div className="pricings">5</div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                            </div>
                        </div>
                        <div className="pricing-card">

                            <div className="pricing-header">
                                <div className="top-items-head">
                                    Standard ad
                                </div>
                                <div className="top-items-head color-blue">
                                    €300
                                </div>
                            </div>
                            <div className="pricing-items">
                                <div className="pricings">30 days</div>
                                <div className="pricings">Unlimited</div>
                                <div className="pricings">20</div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                            </div>
                        </div>
                        <div className="pricing-card">

                            <div className="pricing-header">
                                <div className="top-items-head">
                                    Job bundle

                                </div>
                                <div className="top-items-head color-blue">
                                    €1000
                                </div>
                            </div>
                            <div className="pricing-items">
                                <div className="pricings">30 day</div>
                                <div className="pricings">Unlimited</div>
                                <div className="pricings">100</div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                            </div>
                        </div>
                        <div className="pricing-card">

                            <div className="pricing-header">

                                <div className="top-items-head">
                                    VIP package

                                </div>
                                <div className="top-items-head color-blue">
                                    Customize
                                </div>
                            </div>
                            {/* <div className="pricing-items">
                                <div className="pricings">30 day</div>
                                <div className="pricings">Unlimited</div>
                                <div className="pricings">100</div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                                <div className="pricings"><FaCheckCircle className="check-icon" /></div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="pricing-image">

                    <div className="image-section">

                        <img src={require("../../assets/images/sample/an-african.png")} alt="" />

                    </div>

                </div>

            </div>

            <div className="pricing-page">
                    <div className="container-fluid p-0 section-2">
                        <div className="left-side position-relative">
                            <p className="title">Video questionnaire's</p>
                            <p className="description">
                                Write your interview questions, set a time for each answer, and fire away! Candidates can then answer each
                                question in a video format, and once their done it comes back straight into your online inbox.
                            </p>
                        </div>
                        <div className="right-side container-fluid p-0 d-flex justify-content-center">
                            <img className="w-100" src={require("..//..//assets/images/pricing/interview.svg")} alt="" />
                            {/* <img className="slider-btn" src={require("..//../assets/images/buttons/SliderBtn.svg")} alt="" /> */}
                        </div>
                    </div>
                </div>
        </>

    )
}

export default Pricing
