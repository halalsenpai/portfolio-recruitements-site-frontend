import React from 'react'
import { Steps } from 'antd';
import { Input, Form } from 'antd';
import * as Rules from '../../utils/rules';
import { FaRedo } from 'react-icons/fa';
import CButton from '../../uiComponents/shared/CButton/CButton';
import { useState } from 'react';
const { Step } = Steps;
function ForgotPassword() {
    const [currentStep, setCurrentStep] = useState(0);
    const onFinish = () => {
        setCurrentStep(prev => prev + 1);
    }
    const renderSteps = () => {
        switch (currentStep) {
            case 0:
                return <Form.Item name="email" className="c-input" >
                    <label>Email</label>
                    <Input placeholder="Enter your email" size="large" type="email" />
                </Form.Item>
            case 1:
                return <> <Form.Item name="code" className="c-input" >
                    <label>Verification code</label>
                    <Input placeholder="Enter the verification code" size="large" type="text" />
                </Form.Item>
                <Form.Item >
                <p className="alt-text">We've sent you an email with password reset verification code</p>
                            <CButton
                                type="large"
                                htmlType="button"
                                themeColor="light"
                                className="align-self-center"
                                // loading={true}
                                block
                            >
                               <FaRedo className="mr-2" />Resend code
                            </CButton>
                        </Form.Item>
                </>
            case 2:
            default:
                return <>
                    <Form.Item name="code" className="c-input"  >
                        <label>New Password</label>
                        <Input placeholder="Enter your new password" size="large" type="text" />
                    </Form.Item>
                    <Form.Item name="code" className="c-input" >
                        <label>Confirm Password</label>
                        <Input placeholder="Confirm your password" size="large" type="text" />
                    </Form.Item>
                   
                </>
        }
    }
    return (
        <div className="c-container auth-wrapper">
            <div className="c-card-container login-container">
                <div className="first-container">
                    <img src={require('../../assets/images/logo/logo-white.png')} alt="logo" />
                    {/* <p className="ml-4">The <b>smartest</b> job site in the Middle East.</p> */}
                </div>
                <div className="second-container">
                    <Form className="c-form" onFinish={onFinish}>
                        <h3 className="form-title w-100">  <mark>Password Reset </mark></h3>
                        <Steps size="small" current={currentStep}>
                            <Step key={1} />
                            <Step />
                            <Step />
                        </Steps>
                        <span className="mt-3 mb-2 w-100">
                            {renderSteps()}
                        </span>
                        <Form.Item >
                            <CButton
                                type="large"
                                htmlType="submit"
                                // loading={true}
                                block
                            >
                                {currentStep < 2 ? 'Next' : 'Submit'}
                            </CButton>
                        </Form.Item>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
