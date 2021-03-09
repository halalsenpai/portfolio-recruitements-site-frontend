import React from 'react';
import CButton from '../../shared/CButton/CButton';

function CJobDetailsCard() {
    return (
        <div className="c-job-detail-card">
                <div className="header">

                    <img className="job-banner-img" src={require('../../../assets/images/sample/job-banner.png')} alt="banner-img" />
                    <span className="banner-img-overlay"></span>

                    <span className="job-info-wrapper">
                        <img className="job-img" src={require('../../../assets/images/sample/jobimg-1.png')} alt="" />
                        <span className="job-info">
                            <h6 className="job-title">Join the largest group of schools</h6>
                            <h3 className="job-company">THE EDUCATION COMPANY</h3>
                            <p className="job-sector">Sector : Primary & Secondary Education</p>
                        </span>
                    </span>

                    <CButton themeColor="transparent">View Jobs</CButton>

                </div>
        </div>
    )
}

export default CJobDetailsCard
