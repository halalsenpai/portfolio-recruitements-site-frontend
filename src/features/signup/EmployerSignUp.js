import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { Input, Form, Select, Checkbox, Alert, Row, Col } from "antd";

import * as Rules from "../../utils/rules";
import TermsConditions from "./TermsConditions";
import Modal from "../../shared-ui/Modal/Modal";
import Button from "../../shared-ui/Button/Button";
import { getCompany, getJobTitle, getCountry } from "./service";
import { showWarningMessage } from "../../utils/message";
import PhoneInput from "react-phone-input-international";
import MediaPicker from "../../shared-ui/MediaPicker/MediaPicker";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { SuperSelect } from "../../shared-ui/SuperSelect/SuperSelect";
// import SelectWithAddItem from "../../shared-ui/SelectWithAddItem/SelectWithAddItem";
import {
  getRole,
  getFindUsPlatform,
  getCity,
  employerSignup,
  getCountryByIp,
  getCitiesByCountry,
} from "./thunk";
import {
  selectRole,
  selectFindUsPlatform,
  selectEmployerSignup,
  selectCompany,
  selectCountry,
  selectJobTitles,
  selectLoadingStatus,
  selectErrorMessage,
  selectCountryByIp,
  selectCitiesByCountry,
} from "./slice";

const { Option } = Select;

function EmployerSignUp() {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [isCreateCompany, setCreateCompany] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [termsModalShow, setTermsModalShow] = useState(false);
  const [countryCode, setCountryCode] = useState("gb");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const roles = useAppSelector(selectRole);
  const findUsPlatforms = useAppSelector(selectFindUsPlatform);
  const signupSuccess = useAppSelector(selectEmployerSignup);
  const companies = useAppSelector(selectCompany);
  const countries = useAppSelector(selectCountry);
  const jobTitles = useAppSelector(selectJobTitles);
  const isLoading = useAppSelector(selectLoadingStatus);
  const errorMessage = useAppSelector(selectErrorMessage);
  const countryByIp = useAppSelector(selectCountryByIp);
  const citiesByCountry = useAppSelector(selectCitiesByCountry);

  useEffect(() => {
    dispatch(getRole());
    dispatch(getFindUsPlatform());
    dispatch(getCity());
    dispatch(getCountryByIp());
  }, []);

  useEffect(() => {
    setCountryCode(countryByIp?.countryCode?.toLowerCase());
  }, [countryByIp]);

  useEffect(() => {
    if (signupSuccess === true) {
      history.push("confirm-email");
    }
  }, [signupSuccess]);

  const onFinish = (values) => {
    if (values.companyProfileId === "create-company") {
      setFormData(values);
      setCurrentStep((prevValue) => prevValue + 1);
      return;
    }

    const role = roles.find((r) => r.title === "employer");

    if (!role && !role.length) {
      return;
    }

    const payload = {
      roleId: role.id,
      ...formData,
      ...values,
    };

    if (payload.companyProfileId === "create-company") {
      delete payload.companyProfileId;
    }
    delete payload.agreeTerms;
    dispatch(employerSignup(payload));
  };

  const onStepChange = () => {
    if (currentStep < 2) {
      setCurrentStep((prevValue) => prevValue + 1);
    } else {
      setFormData({});
      setCurrentStep(1);
    }
  };

  const onCompanyNameChange = (value) => {
    if (value === "create-company") {
      setCreateCompany(true);
      return;
    }
    setCreateCompany(false);
  };
  // const renderSteps = (currentStep) => {
  //   switch (currentStep) {
  //     case 1:
  //       return (
  //         <>
  //           <Row justify="center">
  //             <Col span={18}>
  //               <Form.Item
  //                 label="Company name"
  //                 name="companyProfileId"
  //                 rules={Rules.requiredRule}>
  //                 {/* <SuperSelect
  //                   getPopupContainer={(trigger) => trigger.parentNode}
  //                   defaultValue=""
  //                   fetchOptions={getCompany}
  //                   onChange={onCompanyNameChange}
  //                   keys={["id", "companyName"]}
  //                 /> */}
  //                 <Input />
  //               </Form.Item>
  //             </Col>
  //           </Row>
  //           <div className="create-new-company">
  //             Can't find your company?{" "}
  //             <span className="create-new-btn"> Create new</span>
  //           </div>
  //         </>
  //       );
  //     case 2:
  //       return (

  //       );
  //     case 3:
  //     default:
  //       return <></>;
  //   }
  // };

  const steps = [
    {
      step: 0,
      title: "Step1",
      content: (
        <>
          <Row justify="center">
            <Col span={18}>
              <Form.Item
                label="Company name"
                name="companyProfileId"
                rules={Rules.requiredRule}>
                {/* <SuperSelect
              getPopupContainer={(trigger) => trigger.parentNode}
              defaultValue=""
              fetchOptions={getCompany}
              onChange={onCompanyNameChange}
              keys={["id", "companyName"]}
            /> */}
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <div className="create-new-company">
            Can't find your company?{" "}
            <span className="create-new-btn"> Create new</span>
          </div>
        </>
      ),
    },
    {
      step: 1,
      title: "Step2",
      content: (
        <div className="second-step">
          <div className="header">
            <img
              onClick={onStepChange}
              className="back-btn"
              src={require("../../assets/images/icons/back.svg")}
              alt=""
            />
          </div>
          <Row gutter={[32, 0]}>
            <Col xs={{ span: 24 }} span={12}>
              <Form.Item
                className="c-input"
                label="First name"
                rules={Rules.firstNameRule}
                name="firstName">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} span={12}>
              <Form.Item
                className="c-input"
                label="Last name"
                rules={Rules.lastNameRule}
                name="lastName">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} span={12}>
              <Form.Item
                label="Mobile number"
                className="c-input"
                rules={Rules.phoneRule}>
                <PhoneInput
                  placeholder="Enter your phone number."
                  country={countryCode}
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} span={12}>
              <Form.Item
                label="Direct work phone"
                name="directWorkPhone"
                className="c-input"
                rules={Rules.phoneRule}>
                <PhoneInput
                  placeholder="Enter your work phone."
                  country={countryCode}
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} span={12}>
              <Form.Item
                label="Work email address"
                name="email"
                className="c-input"
                rules={Rules.emailRule}>
                <Input placeholder="Enter your email" type="text" />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} span={12}>
              <Form.Item label="How did you find us?" rules={Rules.emailRule}>
                <Select
                  getPopupContainer={(trigger) => trigger.parentNode}
                  defaultValue="">
                  <Option value="">Select</Option>

                  {findUsPlatforms?.map((fu) => (
                    <Option value={fu.id}>{fu.title}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  return (
    <div className="c-container auth-wrapper">
      <div className="signup-container with-form">
        <Form
          style={{ zIndex: "40" }}
          form={form}
          layout="vertical"
          className="employer-sign-up c-form second-container"
          onFinish={onFinish}>
          {/* {renderSteps(currentStep)} */}

          {steps.map((item) => (
            <div
              className={`steps-content ${
                item.step !== currentStep + 1 && "hidden"
              }`}>
              {item.content}
            </div>
          ))}

          {currentStep == 2 && (
            <>
              <Form.Item
                name="agreeTerms"
                className="mb-3"
                valuePropName="checked"
                rules={Rules.requiredRule}>
                <Checkbox
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}>
                  <div className="blue" onClick={() => setTermsModalShow(true)}>
                    I agree with Jobsmideast.com{" "}
                    <mark className="blue">terms &amp; conditions</mark> and I
                    agree to receive future emails, texts and communications.{" "}
                  </div>
                </Checkbox>
              </Form.Item>
              <Modal
                show={termsModalShow}
                onHide={() => setTermsModalShow(false)}>
                {" "}
                <TermsConditions />
              </Modal>
            </>
          )}

          {errorMessage && <Alert message={errorMessage} type="error" />}

          {currentStep === 1 && (
            <Button
              block
              onClick={onStepChange}
              className="next-btn"
              htmlType="button"
              themeColor="light"
              loading={isLoading}>
              {!isCreateCompany && "Next"}
            </Button>
          )}

          {currentStep === 2 && (
            <>
              <Form.Item className="align-self-end">
                <div className="form-actions">
                  <Button
                    block
                    htmlType="submit"
                    themeColor="light"
                    loading={isLoading}>
                    Next
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
                <h3 className="">Free CRM</h3>
                <p>Builtin CRM with drag and Drop function</p>
              </span>
            </div>
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-2.svg")}
                alt="img"
              />
              <span>
                <h3 className="">Save up to 75%</h3>
                <p>Save up to 75% of your annual recruitment budget</p>
              </span>
            </div>
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-3.svg")}
                alt="img"
              />
              <span>
                <h3 className="">Direct chat + Inbox</h3>
                <p>Connect with candidates direct, no more emails!</p>
              </span>
            </div>
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-4.svg")}
                alt="img"
              />
              <span>
                <h3 className="">Candidate Match</h3>
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
