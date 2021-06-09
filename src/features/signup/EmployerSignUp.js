import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { Input, Form, Select, Checkbox, Alert } from "antd";

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
    if (agreeToTerms === false) {
      showWarningMessage("Agree to terms and conditions to proceed");
      return;
    }
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

  const handleLocationSelect = (v) => {
    if (typeof v === "string") {
      form.setFieldsValue({ cityId: "" });
    }

    dispatch(getCitiesByCountry(v));
  };

  return (
    <div className="c-container auth-wrapper">
      <div className="signup-container with-form">
        <Form
          style={{ zIndex: "40" }}
          form={form}
          layout="vertical"
          className="c-form second-container align-items-start"
          onFinish={onFinish}>
          {currentStep === 1 ? (
            <>
              <h3 className="form-title">
                <mark className="blue">Employer details</mark>
              </h3>
              {/* <div className="d-flex w-100 justify-content-end align-items-center">
                <MediaPicker onPicked={(data) => console.log(data)} />
              </div> */}

              <div className="c-row">
                <Form.Item
                  style={{ zIndex: "400" }}
                  label="Company name"
                  name="companyProfileId"
                  className="c-input"
                  rules={Rules.requiredRule}>
                  <SuperSelect
                    getPopupContainer={(trigger) => trigger.parentNode}
                    defaultValue=""
                    fetchOptions={getCompany}
                    onChange={onCompanyNameChange}
                    keys={["id", "companyName"]}
                    searchKey={"searchValue"}
                    fixedOptions={[
                      {
                        label: "Create New Company",
                        value: "create-company",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  style={{ zIndex: "390" }}
                  label="Job title"
                  name="jobTitleId"
                  className="c-input"
                  rules={Rules.requiredRule}>
                  {/* <SelectWithAddItem
                    options={["Software Engineer", "Accountant"]}
                    onItemChange={(e) => console.log(e)}
                    hintTextForAddItem={"Can't find your job title?"}
                  /> */}
                  <SuperSelect
                    getPopupContainer={(trigger) => trigger.parentNode}
                    defaultValue=""
                    fetchOptions={getJobTitle}
                  />
                </Form.Item>
              </div>
              <div className="c-row">
                <Form.Item
                  label="First name"
                  name="firstName"
                  className="c-input"
                  rules={Rules.firstNameRule}>
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
                  rules={Rules.lastNameRule}>
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
                  className="c-input"
                  rules={Rules.phoneRule}>
                  <PhoneInput
                    placeholder="Enter your mobile no."
                    country={countryCode}
                  />
                </Form.Item>
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
              </div>
              <div className="c-row">
                <Form.Item
                  label="Work email address"
                  name="email"
                  className="c-input"
                  rules={Rules.emailRule}>
                  <Input
                    placeholder="Enter your email"
                    size="small"
                    type="text"
                  />
                </Form.Item>
                <Form.Item
                  style={{ zIndex: "380" }}
                  label="How did you find us?"
                  name="findUsId"
                  className="c-input"
                  rules={Rules.requiredRule}>
                  <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    size="large"
                    defaultValue="">
                    <Option value="">Select</Option>

                    {findUsPlatforms?.map((fu) => (
                      <Option value={fu.id}>{fu.title}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <div className="c-row">
                <Form.Item
                  label="Password"
                  name="password"
                  className="c-input"
                  rules={Rules.passwordRule}>
                  <Input.Password
                    placeholder="Enter password"
                    size="small"
                    type="password"
                  />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  className="c-input"
                  rules={Rules.confirmPasswordRule}
                  dependencies={["password"]}>
                  <Input.Password
                    placeholder="Enter password again"
                    size="small"
                  />
                </Form.Item>
              </div>
            </>
          ) : (
            <>
              <h3 className="form-title w-100 d-flex justify-content-between">
                <mark className="blue">Company details</mark>
                <div className="d-flex justify-content-end align-items-center">
                  <MediaPicker onPicked={(data) => console.log(data)} />
                </div>
              </h3>

              <div className="c-row">
                <Form.Item
                  style={{ zIndex: "370" }}
                  label="I’m registering a"
                  name="companyType"
                  className="c-input"
                  rules={Rules.requiredRule}>
                  <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    size="large"
                    defaultValue="">
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
                  rules={Rules.requiredRule}>
                  <Input
                    placeholder="Enter your company name"
                    size="small"
                    type="text"
                  />
                </Form.Item>
              </div>
              <div className="c-row">
                <Form.Item
                  style={{ zIndex: "360" }}
                  label="Company location"
                  name="countryId"
                  className="c-input"
                  rules={Rules.requiredRule}>
                  {/* <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    size="large"
                    defaultValue=""
                    onSelect={handleLocationSelect}>
                    <Option value="">Select</Option>
                    {countries?.map((c) => (
                      <Option value={c.id}>{c.title}</Option>
                    ))}
                  </Select> */}
                  <SuperSelect
                    getPopupContainer={(trigger) => trigger.parentNode}
                    defaultValue=""
                    fetchOptions={getCountry}
                    onSelect={handleLocationSelect}
                  />
                </Form.Item>
                <Form.Item
                  style={{ zIndex: "340" }}
                  label="City"
                  name="cityId"
                  className="c-input"
                  rules={Rules.requiredRule}>
                  <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    disabled={citiesByCountry?.length < 1 ? true : false}
                    size="large"
                    defaultValue="">
                    <Option value="">Select</Option>
                    {citiesByCountry?.map((c) => (
                      <Option value={c.id}>{c.title}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <div className="c-row">
                <Form.Item
                  label="Website https://"
                  name="webUrl"
                  className="c-input"
                  rules={Rules.requiredRule}>
                  <Input
                    placeholder="Enter your website"
                    size="small"
                    type="text"
                  />
                </Form.Item>
                <Form.Item
                  label="Company phone number"
                  name="companyPhone"
                  className="c-input"
                  rules={Rules.phoneRule}>
                  <PhoneInput
                    placeholder="Enter your work phone."
                    country={countryCode}
                  />
                </Form.Item>
              </div>
            </>
          )}

          <Form.Item
            name="agreeTerms"
            className="mb-3"
            valuePropName="checked"
            rules={Rules.requiredRule}>
            <Checkbox
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}>
              I agree with Jobsmideast.com{" "}
              <mark className="blue" onClick={() => setTermsModalShow(true)}>
                terms &amp; conditions
              </mark>{" "}
              and <mark className="blue">privacy policy.</mark> and I agree to
              receive future emails, texts and communications.{" "}
            </Checkbox>
          </Form.Item>
          <Modal show={termsModalShow} onHide={() => setTermsModalShow(false)}>
            {" "}
            <TermsConditions />
          </Modal>

          {errorMessage && <Alert message={errorMessage} type="error" />}

          {currentStep === 1 && (
            <Form.Item className="align-self-end mb-0">
              <Button
                block
                type="large"
                className="create-profile-button"
                htmlType="submit"
                themeColor="light"
                loading={isLoading}>
                {isCreateCompany && "Next"}
                {!isCreateCompany && "Create my profile"}
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
                    disabled={isLoading}>
                    Back
                  </Button>
                  <Button
                    block
                    type="large"
                    htmlType="submit"
                    themeColor="light"
                    loading={isLoading}>
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
