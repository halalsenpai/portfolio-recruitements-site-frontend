import React from 'react'
import { Input, Form } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import * as Rules from '../../utils/rules';
import CButton from '../../uiComponents/shared/CButton/CButton';
import PhoneInput from 'react-phone-input-international';
import { Popover, DatePicker, Select } from 'antd';

const { Option } = Select;

function JobSeekerSignUp() {

    const onFinish = () => {

    };

    let helperText = "This helps employers understand your family needs and accommodate accordingly such as booking you flights, providing accommodation and benefits such as free or discounted tuition fees.";

    const WithHintText = ({ children }) => <Popover placement="topLeft" overlayInnerStyle={{ width: 400 }} content={helperText} trigger="click">{children}</Popover>

    return (
        <div className="c-container auth-wrapper">

            <div className="signup-container with-form">

                <div className="first-container">

                    <img src={require('../../assets/images/logo/logo-white.png')} alt="logo" />

                    <span className="inner-container">

                        <h3><span>Looking for a new job?</span></h3>

                        <div className="box">

                            <img src={require('../../assets/images/icons/signup-icons/signup-icon-1.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">One click apply</h3>
                                <p>Short list jobs and apply All to  them  with 1 click</p>
                            </span>

                        </div>

                        <div className="box">

                            <img src={require('../../assets/images/icons/signup-icons/signup-icon-2.svg')} alt="img" />

                            <span>
                                <h3 className="b-text">Job Match</h3>
                                <p>Let our system do the work for you even while you sleep!</p>
                            </span>

                        </div>
                        <div className="box">

                            <img src={require('../../assets/images/icons/signup-icons/signup-icon-3.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Direct chat + Inbox</h3>
                                <p>Talk to employers & agencies in real time, no emails!</p>
                            </span>

                        </div>
                        <div className="box">

                            <img src={require('../../assets/images/icons/signup-icons/signup-icon-4.svg')} alt="img" />
                            <span>
                                <h3 className="b-text">Follow Companies</h3>
                                <p>Follow companies and stay up to date with all their jobs</p>
                            </span>

                        </div>

                    </span>

                </div>
                <Form className="second-container c-form align-items-start" onFinish={onFinish}>

                    <h3 className="form-title">Discover a new way of hiring & make the right connections.</h3>

                    <div className="c-row">

                        <Form.Item name="firstName" className="c-input" rules={Rules.firstNameRule} >

                            <label className="required">First name</label>

                            <Input placeholder="Enter your first name" size="small" type="text" />

                        </Form.Item>

                        <Form.Item name="lastName" className="c-input" rules={Rules.lastNameRule} >

                            <label className="required">Last name</label>

                            <Input placeholder="Enter your last name" size="small" type="text" />

                        </Form.Item>

                    </div>

                    <div className="c-row">

                        <Form.Item name="mobileNumber" className="c-input" rules={Rules.phoneRule} >

                            <label className="required">Mobile number</label>

                            <PhoneInput
                                placeholder="Enter your mobile no."
                                country={'us'}
                                onChange={phone => console.log(phone)}
                            />

                        </Form.Item>

                        <Form.Item name="email" className="c-input" rules={Rules.emailRule} >

                            <label className="required">Email</label>

                            <Input placeholder="Enter your email" size="small" type="text" />

                        </Form.Item>

                    </div>

                    <div className="c-row">

                        <Form.Item name="familyStatus" className="c-input" rules={Rules.phoneRule} >

                            <div className="c-label">

                                <label className="required"> Family status </label>
                                <WithHintText>
                                    <img class="label-icon" src={require('../../assets/images/icons/information-icon.svg')} alt="" />
                                </WithHintText>

                            </div>

                            <Select size="large" defaultValue="" >

                                <Option value="">Select</Option>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>

                            </Select>

                        </Form.Item>

                        <Form.Item name="email" className="c-input" rules={Rules.emailRule} >

                            <div className="c-label">

                                <label className="required">Gender</label>
                                <WithHintText>
                                    <img class="label-icon" src={require('../../assets/images/icons/information-icon.svg')} alt="" />
                                </WithHintText>

                            </div>

                            <Select size="large" defaultValue="" >

                                <Option value="">Select</Option>
                                <Option value="jack">Male</Option>
                                <Option value="lucy">Female</Option>

                            </Select>

                        </Form.Item>

                    </div>

                    <div className="c-row">

                        <Form.Item name="dateOfbirth" className="c-input" rules={Rules.phoneRule} >

                            <label className="required">Date of birth</label>
                            <DatePicker />

                        </Form.Item>

                        <Form.Item name="email" className="c-input" rules={Rules.emailRule} >

                            <div className="c-label">

                                <label className="required">Passport nationality</label>
                                <WithHintText>
                                    <img class="label-icon" src={require('../../assets/images/icons/information-icon.svg')} alt="" />
                                </WithHintText>
                            </div>

                            <Select size="large" defaultValue="" style={{ width: 120 }}>
                                <Option value="">Select</Option>
                                <Option value="asfd">US </Option>
                                <Option value="lucy">Canada</Option>
                            </Select>

                        </Form.Item>

                    </div>

                    <Form.Item name="remember" className="mb-0" >
                        
                        <Checkbox checked value="">I agree with Jobsmideast.com <mark>terms & conditions</mark> and <mark>privacy policy.</mark></Checkbox>
                   
                    </Form.Item>

                    <Form.Item name="remember" className="mb-0" >
                      
                        <Checkbox value="">I agree to Jobsmideast T&C’s, the data privacy statement, and to receive future emails, texts and communications.</Checkbox>
                    
                    </Form.Item>
                    
                    <Form.Item className=" mb-0 align-self-end">
                     
                        <CButton
                            themeColor="light"
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
    )
    
}

export default JobSeekerSignUp
