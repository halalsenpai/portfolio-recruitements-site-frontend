import React from "react";
import Modal from "../../shared/CModal/CModal";
import { Input, Form, Select, DatePicker } from "antd";
import CButton from "../../shared/CButton/CButton"
import * as Rules from "../../../utils/rules";
import Checkbox from 'antd/lib/checkbox/Checkbox';

const ModalCertificateForm = ()=> {

    return (
        <>
            <Modal show={true}>
                <div className="certificate-form-container">

                    <h1 className="cer-headings">Post graduate certificate</h1>

                    <Form className="c-form">

                        <div className="cer-form-rows cer-x-spacing">
                        
                            <Form.Item name="firstName" className="c-input w-100 " rules={Rules.firstNameRule}>

                                <label className="required">Certificate</label>
                                <Input className="w-100" placeholder="e.g. PGCE, QTS, Fork lift driver license, TEFL" size="large" type="text" />
                            
                            </Form.Item>

                        </div>

                        <div className="cer-form-rows">

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

                        <div className="cer-form-rows cer-x-spacing">
                            
                            <textarea className="w-100 my-4">

                            </textarea>

                        </div>

                        <div className="cer-form-rows cer-x-spacing">

                            <CButton themeColor="light" type="large" htmlType="submit" block>
                                Update
                            </CButton>

                        </div>

                    </Form>

                </div>
            </Modal>
        </>
    )

}

export default ModalCertificateForm;