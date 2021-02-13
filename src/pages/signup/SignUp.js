import { Input, Form } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CButton from '../../uiComponents/shared/CButton/CButton';
import { userTypes } from '../../utils/constants';
import * as Rules from '../../utils/rules';

function SignUp() {
    const [userType, setUserType] = useState('');
    const onFinish = () => {

    }
    const getIsActive = (type) => {
        return userType === type ? 'active' : ''
    }
    const getFormTitle = (type) => {
        switch (type) {
            case userTypes.AGENCY:
                return 'Agency login';
            case userTypes.EMPLOYER:
                return 'Employer login';
            case userTypes.SEEKER:
                return 'Job Seeker login';
            default:
                return ''
        }
    }
    if (!userType) {
        return (
            <div className="c-container p-0">
                <div className="signup-container">
                    <div className="wrapper">
                        <div className="user-type seeker">
                            <span className="" >
                                <div className="inner-container">
                                    <img src={require('../../assets/images/user-icon.svg')} alt="seeker" />
                                    <p>Job Seeker</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="user-type employer">
                            <span className="" >
                                <div className="inner-container">
                                    <img src={require('../../assets/images/employee-icon.svg')} alt="seeker" />
                                    <p>Employer</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="user-type agency">
                            <span className="" >
                                <div className="inner-container">
                                    <img src={require('../../assets/images/agency-icon.svg')} alt="seeker" />
                                    <p>Agency</p>
                                </div>
                            </span>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
    return (
        <div className="c-container pt-4 pb-0">
            <div className="signup-container">
                <div className="first-container">
                    <img src={require('../../assets/images/logo-white.png')} alt="logo" />
                    <p className="ml-4">The <b>smartest</b> job site in the Middle East.</p>
                </div>
                <div className="second-container">
                    <div className="user-type">
                        <span
                            className={`${getIsActive(userTypes.SEEKER)}`}
                            onClick={() => setUserType(userTypes.SEEKER)}>
                            Job Seeker
                        </span>
                        <span
                            className={`${getIsActive(userTypes.EMPLOYER)}`}
                            onClick={() => setUserType(userTypes.EMPLOYER)}>
                            Employer
                        </span>
                        <span
                            className={`${getIsActive(userTypes.AGENCY)}`}
                            onClick={() => setUserType(userTypes.AGENCY)}>
                            Agency
                        </span>
                    </div>
                    <Form className="c-form" onFinish={onFinish}>
                        <h3 className="form-title">{getFormTitle(userType)}</h3>
                        <Form.Item name="email" className="c-input" rules={Rules.emailRule} >
                            <label>Email</label>
                            <Input placeholder="Email" size="large" type="email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={Rules.passwordRule}
                            className="c-password-input mb-2"
                        >
                            <label>Password</label>
                            <Input.Password placeholder="Password" className="c-input" size="large" />
                        </Form.Item>

                        <span className="d-flex justify-content-between align-items-center w-100 alt-text mt-2">
                            <Form.Item name="remember" className="mb-0" >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Link to="/" className="alt-text">Forgot Password</Link>
                        </span>
                        <Form.Item className="mt-4">
                            <CButton
                                type="large"
                                htmlType="submit"
                                // loading={true}
                                block
                            >
                                Login
                         </CButton>
                        </Form.Item>
                        <Form.Item className="alt-text mb-0">
                            <p className="mb-0">Don't have an account? <Link to="/sign-up"><mark> Sign up</mark></Link></p>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
