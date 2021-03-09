import React from 'react'
import { Input, Form, Select } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import * as Rules from '../../utils/rules';
import CButton from '../../uiComponents/shared/CButton/CButton'
import { useState } from 'react';
import CSelectWithAddItem from '../../uiComponents/shared/CSelectWithAddItem/CSelectWithAddItem';
import PhoneInput from 'react-phone-input-international';
import CMediaPicker from '../../uiComponents/shared/CMediaPicker/CMediaPicker';
const { Option } = Select;
function AgencySignUp() {
    const [currentStep, setCurrentStep] = useState(1);
    const onFinish = () => {
        if (currentStep < 2) {
            setCurrentStep(prevValue => prevValue + 1);
        }
    }
    return (
        <div className="c-container auth-wrapper">
            <div className="signup-container with-form">
                <Form className="c-form second-container align-items-start" onFinish={onFinish}>
                    {currentStep == 1
                        ?
                        <>
                            <h3 className="form-title"><mark className="blue">Agent details</mark></h3>
                            <div className="d-flex w-100 justify-content-end align-items-center">
                                <CMediaPicker onPicked={(data)=>console.log(data)} />
                            </div>
                            <div className="c-row">
                                <Form.Item name="lastName" className="c-input" >
                                    <label className="required">Company name</label>
                                    <Input placeholder="Enter your last name" size="small" type="text" />
                                </Form.Item>
                                <Form.Item name="lastName" className="c-input" >
                                    <label className="required">Job Title</label>
                                    <CSelectWithAddItem
                                        options={['Software Engineer', 'Accountant']}
                                        onItemChange={e => console.log(e)}
                                        hintTextForAddItem={"Can't find your job title?"}
                                    />
                                </Form.Item>
                            </div>
                            <div className="c-row">
                                <Form.Item name="firstName" className="c-input"  >
                                    <label className="required">First Name</label>
                                    <Input placeholder="Enter your first name" size="small" type="text" />
                                </Form.Item>
                                <Form.Item name="lastName" className="c-input"  >
                                    <label className="required">Last Name </label>
                                    <Input placeholder="Enter your last name" size="small" type="text" />
                                </Form.Item>

                            </div>

                            <div className="c-row">
                                <Form.Item name="mobileNumber" className="c-input"  >
                                    <label className="required">Mobile number</label>
                                    <PhoneInput
                                        placeholder="Enter your mobile no."
                                        country={'us'}
                                        onChange={phone => console.log(phone)}
                                    />
                                </Form.Item>
                                <Form.Item name="workPhone" className="c-input"  >
                                    <label className="required">Direct Work Phone</label>
                                    <PhoneInput
                                        placeholder="Enter your work phone."
                                        country={'us'}
                                        onChange={phone => console.log(phone)}
                                    />
                                </Form.Item>
                            </div>
                            <div className="c-row">
                                <Form.Item name="email" className="c-input"  >
                                    <label className="required">Work email address </label>
                                    <Input placeholder="Enter your email" size="small" type="text" />
                                </Form.Item>
                                <Form.Item name="familyStatus" className="c-input"  >
                                    <div className="c-label">
                                        <label className="required">How did you find us?</label>
                                    </div>
                                    <Select size="large" defaultValue="" >
                                        <Option value="">Select</Option>
                                    </Select>
                                </Form.Item>

                            </div>
                        </>
                        :
                        <>
                            <h3 className="form-title"><mark className="blue">Agency details</mark></h3>
                            <div className="c-row">
                                <Form.Item name="firstName" className="c-input"  >
                                    <label className="required">I’m registering a</label>
                                    <Input placeholder="Enter your first name" size="small" type="text" />
                                </Form.Item>
                                <Form.Item name="lastName" className="c-input" >
                                    <label className="required">Company name</label>
                                    <Input placeholder="Enter your last name" size="small" type="text" />
                                </Form.Item>
                            </div>
                            <div className="c-row">
                                <Form.Item name="lastName" className="c-input" >
                                    <label className="required">Company location</label>
                                    <Input placeholder="Enter your last name" size="small" type="text" />
                                </Form.Item>
                                <Form.Item name="mobileNumber" className="c-input"  >
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
                        </>

                    }


                    <Form.Item name="remember" className="mb-0" >
                        <Checkbox value="">I agree with Jobsmideast.com
                        <mark className="blue">terms & conditions</mark>
                         and <mark className="blue">privacy policy.</mark>
                          and I agree to receive future emails, texts and communications.
                          </Checkbox>
                    </Form.Item>
                    <Form.Item className=" align-self-end">
                        <CButton
                            type="large"
                            htmlType="submit"
                            themeColor="blue"
                            // loading={true}
                            block
                        >
                            Create my profile
                         </CButton>
                    </Form.Item>

                </Form>
                <div className="first-container on-right bg-2">
                    <img src={require('../../assets/images/logo/logo-white.png')} alt="logo" />
                    <span className="inner-container">
                        <div className="box">
                            <img src={require('../../assets/images/icons/employee-signup-icons/emp-signup-1.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Free CRM</h3>
                                <p>Builtin CRM with drag and Drop function</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/icons/employee-signup-icons/emp-signup-2.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Save up to 75%</h3>
                                <p>Save up to 75% of to your annual recruitment budget</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/icons/employee-signup-icons/emp-signup-3.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Direct chat + Inbox</h3>
                                <p>Connect with candidates direct, no more emails!</p>
                            </span>
                        </div>
                        <div className="box">
                            <img src={require('../../assets/images/icons/employee-signup-icons/emp-signup-4.svg')} alt="img" />
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
