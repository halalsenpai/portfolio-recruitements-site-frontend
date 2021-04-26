import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { Input, Form, Select, Checkbox } from "antd";

import * as Rules from "../../utils/rules";
import Button from "../../shared-ui/Button/Button";
import PhoneInput from "react-phone-input-international";
import MediaPicker from "../../shared-ui/MediaPicker/MediaPicker";
import SelectWithAddItem from "../../shared-ui/SelectWithAddItem/SelectWithAddItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectFindUsPlatform,
  getFindUsPlatform,
  selectEmployerSignup,
} from "./slice";

const { Option } = Select;

function EmployerSignUp() {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useAppDispatch();
  const findUsPlatforms = useAppSelector(selectFindUsPlatform);
  const signupSuccess = useAppSelector(selectEmployerSignup);

  useEffect(() => {
    dispatch(getFindUsPlatform());
  }, []);

  useEffect(() => {
    console.log("findUsPlatforms: ", findUsPlatforms);
  }, [findUsPlatforms]);

  useEffect(() => {
    if (signupSuccess === true) {
      history.push("confirm-email");
    }
  }, [signupSuccess]);

  const onFinish = (values) => {
    delete values.agreeTerms;
    const payload = {
      ...values,
      roleId: 2,
    };
    // dispatch(jobseekerSignup(payload));
  };

  const onStepChange = () => {
    if (currentStep < 2) {
      setCurrentStep((prevValue) => prevValue + 1);
    } else {
      setCurrentStep(1);
    }
  };

  return (
    <div className="c-container auth-wrapper">
      <div className="signup-container with-form">
        <Form
          layout="vertical"
          className="c-form second-container align-items-start"
          onFinish={onFinish}
        >
          {currentStep === 1 ? (
            <>
              <h3 className="form-title">
                <mark className="blue">Employer details</mark>
              </h3>
              <div className="d-flex w-100 justify-content-end align-items-center">
                <MediaPicker onPicked={(data) => console.log(data)} />
              </div>

              <div className="c-row">
                <Form.Item
                  label="Company name"
                  name="companyName"
                  className="c-input"
                  rules={Rules.requiredRule}
                >
                  <Input
                    placeholder="Enter your company name"
                    size="small"
                    type="text"
                  />
                </Form.Item>
                <Form.Item
                  label="Job title"
                  name="jobTitleId"
                  className="c-input"
                  rules={Rules.requiredRule}
                >
                  <SelectWithAddItem
                    options={["Software Engineer", "Accountant"]}
                    onItemChange={(e) => console.log(e)}
                    hintTextForAddItem={"Can't find your job title?"}
                  />
                </Form.Item>
              </div>
              <div className="c-row">
                <Form.Item
                  label="First name"
                  name="firstName"
                  className="c-input"
                  rules={Rules.firstNameRule}
                >
                  <Input
                    placeholder="Enter your first name"
                    size="small"
                    type="text"
                  />
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  className="c-input"
                  rules={Rules.lastNameRule}
                >
                  <Input
                    placeholder="Enter your last name"
                    size="small"
                    type="text"
                  />
                </Form.Item>
              </div>
              <div className="c-row">
                <Form.Item
                  label="Mobile number"
                  name="mobile"
                  className="c-input phone-fix"
                  rules={Rules.phoneRule}
                >
                  <PhoneInput
                    placeholder="Enter your mobile no."
                    country={"us"}
                    onChange={(phone) => console.log(phone)}
                  />
                </Form.Item>
                <Form.Item
                  label="Direct work phone"
                  name="companyPhone"
                  className="c-input phone-fix"
                  rules={Rules.phoneRule}
                >
                  <PhoneInput
                    placeholder="Enter your work phone."
                    country={"us"}
                    onChange={(phone) => console.log(phone)}
                  />
                </Form.Item>
              </div>
              <div className="c-row">
                <Form.Item
                  label="Work email address"
                  name="email"
                  className="c-input"
                  rules={Rules.emailRule}
                >
                  <Input
                    placeholder="Enter your email"
                    size="small"
                    type="text"
                  />
                </Form.Item>
                <Form.Item
                  label="How did you find us?"
                  name="findUsId"
                  className="c-input"
                  rules={Rules.requiredRule}
                >
                  <Select size="large" defaultValue="">
                    <Option value="">Select</Option>

                    {findUsPlatforms?.map((fu) => (
                      <Option value={fu.id}>{fu.title}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </>
          ) : (
            <>
              <h3 className="form-title">
                <mark className="blue">Company details</mark>
              </h3>
              <div className="c-row">
                <Form.Item
                  label="I’m registering a"
                  name="companyType"
                  className="c-input"
                  rules={Rules.requiredRule}
                >
                  <Select size="large" defaultValue="">
                    <Option value="">Select</Option>
                    <Option value="single-company">Single company</Option>
                    <Option value="headquarters">Headquarters</Option>
                    <Option value="branch">Branch within the company</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Company name"
                  name="companyName"
                  className="c-input"
                  rules={Rules.requiredRule}
                >
                  <Input
                    placeholder="Enter your company name"
                    size="small"
                    type="text"
                  />
                </Form.Item>
              </div>
              <div className="c-row">
                <Form.Item
                  label="Company location"
                  name="countryId"
                  className="c-input"
                  rules={Rules.requiredRule}
                >
                  <Select size="large" defaultValue="">
                    <Option value="">Select</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="City"
                  name="cityId"
                  className="c-input"
                  rules={Rules.requiredRule}
                >
                  <Select size="large" defaultValue="">
                    <Option value="">Select</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="c-row">
                <Form.Item
                  label="Website https://"
                  name="webUrl"
                  className="c-input"
                  rules={Rules.emailRule}
                >
                  <Input
                    placeholder="Enter your website"
                    size="small"
                    type="text"
                  />
                </Form.Item>
                <Form.Item
                  label="Company phone number"
                  name="companyPhone"
                  className="c-input phone-fix"
                  rules={Rules.phoneRule}
                >
                  <Input placeholder="" size="small" type="text" />
                </Form.Item>
              </div>
            </>
          )}

          <Form.Item name="agreeTerms" className="mb-3" valuePropName="checked">
            <Checkbox value="">
              I agree with Jobsmideast.com{" "}
              <mark className="blue">terms &amp; conditions</mark> and{" "}
              <mark className="blue">privacy policy.</mark> and I agree to
              receive future emails, texts and communications.{" "}
            </Checkbox>
          </Form.Item>

          {currentStep === 1 && (
            <Form.Item className="align-self-end">
              <Button
                block
                type="large"
                htmlType="button"
                themeColor="blue"
                onClick={onStepChange}
              >
                Next
              </Button>
            </Form.Item>
          )}

          {currentStep === 2 && (
            <>
              <Form.Item className="align-self-end">
                <div className="form-actions">
                  <Button
                    block
                    type="large"
                    htmlType="button"
                    themeColor="default"
                    onClick={onStepChange}
                  >
                    Back
                  </Button>
                  <Button
                    block
                    type="large"
                    htmlType="submit"
                    themeColor="blue"
                    // loading={true}
                  >
                    Create my profile
                  </Button>
                </div>
              </Form.Item>
            </>
          )}
        </Form>
        <div className="first-container on-right bg-2">
          <img
            className="logo"
            src={require("../../assets/images/logo/logo-white.png")}
            alt="logo"
          />
          <span className="inner-container">
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-1.svg")}
                alt="img"
              />
              <span>
                <h3 className="b-text">Free CRM</h3>
                <p>Builtin CRM with drag and Drop function</p>
              </span>
            </div>
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-2.svg")}
                alt="img"
              />
              <span>
                <h3 className="b-text">Save up to 75%</h3>
                <p>Save up to 75% of to your annual recruitment budget</p>
              </span>
            </div>
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-3.svg")}
                alt="img"
              />
              <span>
                <h3 className="b-text">Direct chat + Inbox</h3>
                <p>Connect with candidates direct, no more emails!</p>
              </span>
            </div>
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-4.svg")}
                alt="img"
              />
              <span>
                <h3 className="b-text">Candidate Match</h3>
                <p>
                  Set accurate filters and let the system find you job seekers!
                </p>
              </span>
            </div>
          </span>
        </div>{" "}
      </div>
    </div>
  );
}

export default EmployerSignUp;