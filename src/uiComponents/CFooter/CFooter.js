import React from 'react'
import LogoImage from '../../assets/images/logo/logo-md.png'
import CButton from '../shared/CButton/CButton'

function CFooter() {
    return (
        <div className="c-footer">
            
            <span className="shadow-box"></span>
            <span className=" inner-container ">
                <div className='container d-flex'>
                <ul className="info">
                    <img className="logo" src={LogoImage} alt="Logo" />
                    <span>
                        <p className="mb-4">Jobsmideast.com is the smartest job site in the Middle East. Our amazing team consists of some of the most experienced and talented developers, social media executives and account managers on the market, with years of experience in different sectors to make your experience more efficient & effortless. <br /><br /> We are the only job site in the Middle East that offers our clients a job platform + CRM + inbox & live chat all in one package. To book a demo with one of our account managers click below.</p>
                        <CButton>Book Demo</CButton>
                    </span>
                </ul>
                <ul>
                    <a href="/">
                        <h3 className="green">Site Map</h3>
                    </a>
                    <a href="/">About us</a>
                    <a href="/">Attestation</a>
                    <a href="/">Agencies</a>
                    <a href="/">Employers</a>
                    <a href="/">Job seekers</a>
                    <a href="/">Work with us</a>
                    <a href="/">Pricing</a>
                    <a href="/">T&C’s</a>
                    <a href="/">Services</a>
                </ul>
                <ul>
                    <a href="/">
                        <h3 className="red">Job Seekers</h3>
                    </a>
                    <a href="/">About us</a>
                    <a href="/">Attestation</a>
                    <a href="/">Agencies</a>
                    <a href="/">Employers</a>
                    <a href="/">Job seekers</a>
                    <a href="/">Work with us</a>
                    <a href="/">Pricing</a>
                    <a href="/">T&C’s</a>
                    <a href="/">Services</a>
                </ul>
                <ul>
                    <a href="/">
                        <h3 className="blue">Employers & Agencies</h3>
                    </a>
                    <a href="/">About us</a>
                    <a href="/">Attestation</a>
                    <a href="/">Agencies</a>
                    <a href="/">Employers</a>
                    <a href="/">Job seekers</a>
                    <a href="/">Work with us</a>
                    <a href="/">Pricing</a>
                    <a href="/">T&C’s</a>
                    <a href="/">Services</a>
                </ul>
                <ul>
                    <a href="/">
                        <h3>Head Office </h3>
                    </a>
                    <p>Buckinghamshire <br /> United Kingdom</p>
                    <a href="mailto:enquiries@jobsmideast.com" className="mt-4">enquiries@jobsmideast.com</a>
                </ul>
                </div>
                </span>
        </div>
    )
}

export default CFooter
