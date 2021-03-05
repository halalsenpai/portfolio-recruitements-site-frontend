import { Input, Form } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function SignUp() {
    const history = useHistory();
    return (
        <div className="c-container auth-wrapper">
            <div className="c-card-container ">
                <div className="first-container">
                    <img className="small" src={require('../../assets/images/signup-icon.svg')} alt="logo" />
                    <img  src={require('../../assets/images/logo-white.svg')} alt="logo" />
                </div>
                <div className="second-container signup-container flex-row with-pad">
                        <div className="wrapper" onClick={() => history.push('/user-signup')}>
                            <div className="user-type seeker">
                                <span className="" >
                                    <div className="inner-container">
                                        <img src={require('../../assets/images/user-icon.svg')} alt="seeker" />
                                        <p>Job Seeker</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="wrapper" onClick={() => history.push('/employer-signup')}>
                            <div className="user-type employer">
                                <span className="" >
                                    <div className="inner-container">
                                        <img src={require('../../assets/images/employee-icon.svg')} alt="employer" />
                                        <p>Employer</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="wrapper" onClick={() => history.push('/agency-signup')}>
                            <div className="user-type agency">
                                <span className="" >
                                    <div className="inner-container">
                                        <img src={require('../../assets/images/agency-icon.svg')} alt="agency" />
                                        <p>Agency</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )


}

export default SignUp
