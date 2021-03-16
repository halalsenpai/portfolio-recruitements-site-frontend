import React from "react";
import Modal from "../../shared/CModal/CModal";
import { Input, Form, Select, DatePicker } from "antd";
import CButton from "../../shared/CButton/CButton"
import * as Rules from "../../../utils/rules";
import Checkbox from 'antd/lib/checkbox/Checkbox';

const { Option } = Select;


const ExpForm = ()=> {
    return (
        <>
            <Modal show={true}>
                <div className="exp-form-container">

                    <h1 className="exp-headings">Add experience</h1>

                    <Form className="c-form">
                    
                        <div className="exp-form-rows">
                        
                            <Form.Item name="firstName" className="c-input mx-auto" rules={Rules.firstNameRule}>

                                <label className="required">Job title</label>
                                <Input className="" placeholder="Real Estate Manager" size="small" type="text" />
                            
                            </Form.Item>
                            
                            <Form.Item name="email" className="c-input mx-auto" rules={Rules.emailRule}>

                                <div className="c-label">
                                    <label className="required">Employment type</label>
                                </div>

                                <Select size="large" defaultValue="" style={{ width: 120 }}>
                                    <Option value="">Select</Option>
                                </Select>

                            </Form.Item>

                        </div>

                        <div className="exp-form-rows exp-x-spacing">
                        
                            <Form.Item name="firstName" className="c-input w-100 " rules={Rules.firstNameRule}>

                                <label className="required">Company</label>
                                <Input className="w-100" placeholder="" size="large" type="text" />
                            
                            </Form.Item>

                        </div>

                        <div className="exp-form-rows">
                        
                            <Form.Item name="firstName" className="c-input mx-auto" rules={Rules.firstNameRule}>

                                <label className="required">Company location</label>
                                <Input className="" placeholder="" size="small" type="text" />
                            
                            </Form.Item>
                            
                            <Form.Item name="email" className="c-input mx-auto" rules={Rules.emailRule}>

                                <div className="c-label">
                                    <label className="required">City</label>
                                </div>

                                <Select size="large" defaultValue="" style={{ width: 120 }}>
                                    <Option value="">Select</Option>
                                </Select>

                            </Form.Item>

                        </div>

                        <div className="exp-form-rows">

                            <Form.Item name="dateOfbirth"className="c-input mx-auto"rules={Rules.phoneRule}>

                                <label className="required">Start date</label>
                                <DatePicker />

                            </Form.Item>

                            <Form.Item name="dateOfbirth"className="c-input mx-auto"rules={Rules.phoneRule}>

                                <span className="spacing-between">

                                    <label className="required">End date</label>

                                        <Checkbox className="mb-2" value="">
                                            Present
                                        </Checkbox>

                                </span>

                                <DatePicker />

                            </Form.Item>

                        </div>

                        <div className="exp-form-rows exp-x-spacing">
                        
                            <Form.Item name="firstName" className="c-input w-100 " rules={Rules.firstNameRule}>

                                <label className="">Achievements (Optional)</label>
                                <Input className="w-100" placeholder="" size="large" type="text" />
                            
                            </Form.Item>

                        </div>

                        <div className="exp-form-rows exp-x-spacing">
                        
                            <Form.Item name="firstName" className="c-input w-100 " rules={Rules.firstNameRule}>

                                <label className="">Reason for leaving / looking for a new position (optional)</label>
                                <Input className="w-100" placeholder="" size="large" type="text" />
                            
                            </Form.Item>

                        </div>

                        <div className="exp-form-rows exp-x-spacing">
                            
                            <textarea className="w-100 my-4">

                            </textarea>

                        </div>

                        <div className="exp-form-rows exp-x-spacing">

                            <CButton themeColor="light" type="large" htmlType="submit" block>
                                Update
                            </CButton>

                        </div>

                    </Form>

                </div>

            </Modal>
        </>
    );
};

export default ExpForm;