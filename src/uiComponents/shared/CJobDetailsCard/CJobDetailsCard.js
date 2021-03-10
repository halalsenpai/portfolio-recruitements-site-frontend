import React from 'react';
import CButton from '../../shared/CButton/CButton';
import {FaRegHeart} from 'react-icons/fa'
import {BsChat} from 'react-icons/bs';
import {GoStar} from 'react-icons/go';
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

                    <CButton themeColor="transparent small">View Jobs</CButton>

                </div>

                <div className="job-details-wrapper">

                    <span className="details-header">

                        <h3 className="job-title">Job title: <mark>Primary Teacher</mark> </h3>

                        <span className="actions-wrapper">
                            <CButton themeColor="shadowed">Apply</CButton>
                            <CButton themeColor="shadowed rounded"> <FaRegHeart /> </CButton>
                            <CButton themeColor="shadowed rounded"> <GoStar/> </CButton>
                            <CButton themeColor="shadowed rounded"> <BsChat className="highlighted"/> </CButton>
                        </span>

                    </span>

                </div>
        </div>
    )
}

export default CJobDetailsCard
