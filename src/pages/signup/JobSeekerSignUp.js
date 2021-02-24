import React from 'react'
import { Input, Form } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import * as Rules from '../../utils/rules';
import CButton from '../../uiComponents/shared/CButton/CButton'
function JobSeekerSignUp(){
    const onFinish = ()=> {

    };
    return (
        <div className="c-container pt-2 pb-0">
            <div className="signup-container with-form">
                <div className="first-container">
                    <img src={require('../../assets/images/logo-white.svg')} alt="logo" />
                    <span className="inner-container">
                        <h3><span>Looking for a new job?</span></h3>
                        <div className="box">
                            <img src={require('../../assets/images/signup-icon-1.svg')} alt="img" />
                            <span> 
                                <h3 className="b-text">One click apply</h3>
                                <p>Short list jobs and apply All to  them  with 1 click</p>
                            </span> 
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/signup-icon-2.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Job Match</h3>
                                <p>Let our system do the work for you even while you sleep!</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/signup-icon-3.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Direct chat + Inbox</h3>
                                <p>Talk to employers & agencies in real time, no emails!</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/signup-icon-4.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Follow Companies</h3>
                                <p>Follow companies and stay up to date with all their jobs</p>
                            </span>
                        </div>
                    </span>
                </div>
                <div className="second-container">
                    <Form className="c-form" onFinish={onFinish}>
                        {/* <h3 className="form-title">{getFormTitle(userType)}</h3> */}
                        <div className="c-row">
                            <Form.Item name="firstName" className="c-input" rules={Rules.firstNameRule} >
                                <label>First name</label>
                                <Input placeholder="Enter your first name" size="small" type="text" />
                            </Form.Item>
                            <Form.Item name="lastName" className="c-input" rules={Rules.lastNameRule} >
                                <label>Last name</label>
                                <Input placeholder="Enter your last name" size="small" type="text" />
                            </Form.Item>
                        </div>
                        <div className="c-row">
                            <Form.Item name="mobileNumber" className="c-input" rules={Rules.phoneRule} >
                                <label>Mobile number</label>
                                <Input placeholder="Enter your mobile no." size="small" type="text" />
                            </Form.Item>
                            <Form.Item name="email" className="c-input" rules={Rules.emailRule} >
                                <label>Email</label>
                                <Input placeholder="Enter your email" size="small" type="text" />
                            </Form.Item>
                        </div>

                        <div className="c-row">
                            <Form.Item name="familyStatus" className="c-input" rules={Rules.phoneRule} >
                                <label>Family status</label>
                                <Input placeholder="" size="small" type="text" />
                            </Form.Item>
                            <Form.Item name="email" className="c-input" rules={Rules.emailRule} >
                                <label>Gender</label>
                                <Input placeholder="" size="small" type="text" />
                            </Form.Item>
                        </div>

                        <div className="c-row">
                            <Form.Item name="mobileNumber" className="c-input" rules={Rules.phoneRule} >
                                <label>Date of birth</label>
                                <Input placeholder="" size="small" type="text" />
                            </Form.Item>
                            <Form.Item name="email" className="c-input" rules={Rules.emailRule} >
                                <label>Passport nationality</label>
                                <Input placeholder="Enter your email" size="small" type="text" />
                            </Form.Item>
                        </div>
                        <Form.Item name="remember" className="mb-0" >
                            <Checkbox value="">I agree with Jobsmideast.com <mark>terms & conditions</mark> and <mark>privacy policy.</mark></Checkbox>
                        </Form.Item>
                        <Form.Item name="remember" className="mb-0" >
                            <Checkbox value="">I agree to Jobsmideast T&C’s, the data privacy statement, and to receive future emails, texts and communications.</Checkbox>
                        </Form.Item>
                        <Form.Item className="mt-4">
                            <CButton
                                type="large"
                                htmlType="submit"
                                // loading={true}
                                block
                            >
                                Create my profile
                         </CButton>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default JobSeekerSignUp
