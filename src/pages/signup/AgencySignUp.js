import React from 'react'
import { Input, Form } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import * as Rules from '../../utils/rules';
import CButton from '../../uiComponents/shared/CButton/CButton'
function AgencySignUp() {
    const onFinish = () => {

    }
    return (
        <div className="c-container pt-2 pb-0">
            <div className="signup-container with-form">
                <Form className="c-form second-container align-items-start" onFinish={onFinish}>
                    <h3 className="form-title"><mark>Agency details</mark></h3>
                    <div className="c-row">
                        <Form.Item name="firstName" className="c-input" rules={Rules.firstNameRule} >
                            <label className="required">I’m registering a</label>
                            <Input placeholder="Enter your first name" size="small" type="text" />
                        </Form.Item>
                        <Form.Item name="lastName" className="c-input" rules={Rules.lastNameRule} >
                            <label className="required">Company name</label>
                            <Input placeholder="Enter your last name" size="small" type="text" />
                        </Form.Item>
                    </div>
                    <div className="c-row">
                        <Form.Item name="lastName" className="c-input" rules={Rules.lastNameRule} >
                            <label className="required">Company location</label>
                            <Input placeholder="Enter your last name" size="small" type="text" />
                        </Form.Item>
                        <Form.Item name="mobileNumber" className="c-input" rules={Rules.phoneRule} >
                            <label className="required">City </label>
                            <Input placeholder="Enter your mobile no." size="small" type="text" />
                        </Form.Item>

                    </div>

                    <div className="c-row">
                        <Form.Item name="email" className="c-input" rules={Rules.emailRule} >
                            <label className="required">Website https://</label>
                            <Input placeholder="Enter your email" size="small" type="text" />
                        </Form.Item>
                        <Form.Item name="email" className="c-input" rules={Rules.emailRule} >
                            <label className="required">Company phone number</label>
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
                        <Checkbox value="">I agree with Jobsmideast.com <mark>terms & conditions</mark> and <mark>privacy policy.</mark> and I agree to receive future emails, texts and communications. </Checkbox>
                    </Form.Item>

                    <Form.Item className="mt-4 align-self-end">
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
                <div className="first-container on-right">
                    <img src={require('../../assets/images/logo-white.svg')} alt="logo" />
                    <span className="inner-container">
                        <div className="box">
                            <img src={require('../../assets/images/emp-signup-1.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Free CRM</h3>
                                <p>Builtin CRM with drag and Drop function</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/emp-signup-2.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Save up to 75%</h3>
                                <p>Save up to 75% of to your annual recruitment budget</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/emp-signup-3.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Direct chat + Inbox</h3>
                                <p>Connect with candidates direct, no more emails!</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/emp-signup-4.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Candidate Match</h3>
                                <p>Set accurate filters and let the system find you job seekers!</p>
                            </span>
                        </div>
                    </span>
                </div> </div>
        </div>
    )
}

export default AgencySignUp
