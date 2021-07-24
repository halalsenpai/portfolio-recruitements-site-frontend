import React, { useEffect, useState } from "react";
import useRefState from "react-usestateref";

import { useHistory, useLocation } from "react-router-dom";
import { Input, Form, Select, Checkbox, Alert, Row, Col, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import queryString from "query-string";
import { DobChecker } from "../../utils/helper";
import * as Rules from "../../utils/rules";
import TermsConditions from "./TermsConditions";
import Modal from "../../shared-ui/Modal/Modal";
import Button from "../../shared-ui/Button/Button";
import {
  getCompany,
  getJobTitle,
  getCountry,
  getSector,
  getCitiesByCountry,
} from "./service";
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
  uploadProfileImage,
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
  selectProfileImage,
} from "./slice";
import AvatarPicker from "../../shared-ui/AvatarPicker/AvatarPicker";

const { Option } = Select;

function EmployerSignUp() {
  const [form] = Form.useForm();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [isCreateCompany, setCreateCompany] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [termsModalShow, setTermsModalShow] = useState(false);
  const [countryCode, setCountryCode] = useState("gb");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [QS, set_QS] = useState(queryString.parse(location.search));

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
  const profileImage = useAppSelector(selectProfileImage);

  useEffect(() => {
    // let params = queryString.parse(location.search);
    dispatch(getRole());
    dispatch(getFindUsPlatform());
    dispatch(getCity());
    dispatch(getCountryByIp());
    if ("companyProfileId" in QS) {
      form.setFieldsValue({
        companyProfileId: QS.companyProfileId,
        firstName: QS.name,
        email: QS.email,
      });
      setCurrentStep(2);
    }
  }, [QS]);

  // const Demo = ({ form: { setFieldsValue } }) => {
  //   React.useEffect(() => {
  //     setFieldsValue({
  //       username: 'Bamboo',
  //     });
  //   }, []);

  useEffect(() => {
    setCountryCode(countryByIp?.countryCode?.toLowerCase());
  }, [countryByIp]);

  useEffect(() => {
    if (signupSuccess === true) {
      history.push("confirm-email");
    }
  }, [signupSuccess]);

  const onFinish = (values) => {
    console.log("onFinish", values);
    setFormData({ ...formData, ...values });

    if (agreeToTerms === false && (currentStep === 2 || currentStep === 3)) {
      showWarningMessage("Agree to terms and conditions to proceed");
      return;
    }
    if (isCreateCompany && currentStep === 2 && !profileImage?.url) {
      showWarningMessage("profile photo is required");
      return;
    }
    if (!isCreateCompany && currentStep === 3 && !profileImage?.url) {
      showWarningMessage("profile photo is required");
      return;
    }
    if (currentStep < 3) {
      setCurrentStep((prevValue) => prevValue + 1);
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

    if (currentStep < 3) {
      return;
    }

    if ("companyProfileId" in QS) {
      payload.companyProfileId = Number(QS.companyProfileId);
    }

    if (payload.companyProfileId === "create-company") {
      delete payload.companyProfileId;
    }
    delete payload.agreeTerms;
    payload.profilePhoto = profileImage?.url;
    console.log(payload);
    dispatch(employerSignup(payload));
  };

  const onStepChange = () => {
    if (currentStep < 3) {
      setCurrentStep((prevValue) => prevValue + 1);
    } else {
      setFormData({});
      setCurrentStep(1);
    }
  };

  const onCompanyNameChange = (value) => {
    if (value === "") {
      setCreateCompany(true);
      return;
    }
    setCreateCompany(false);
  };

  const handleLocationSelect = (v) => {
    setCategoryId(Number(v));
  };

  // useEffect(() => {
  //   const _CId = CategoryIdRef.current;
  //   setCategoryId(Number(_CId));
  // }, [categoryId]);

  const profileImageBeforeUpload = (file) => {
    const payload = new FormData();
    payload.append("file", file, file.name);
    dispatch(uploadProfileImage({ payload }));
    return false;
  };

  const handleCreateNewCompany = () => {
    form.resetFields();
    setCreateCompany(true);
    setCurrentStep(2);
  };

  // useEffect(() => {
  //   setCategoryId(categoryId);
  //   console.log("useeffect", categoryId);
  // }, [categoryId]);

  const renderSteps = (currentStep) => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Row justify="center">
              <Col span={18} md={{ span: 12 }} lg={{ span: 12 }}>
                <Form.Item
                  label="Company name"
                  name="companyProfileId"
                  rules={Rules.requiredRule}>
                  <SuperSelect
                    getPopupContainer={(trigger) => trigger.parentNode}
                    fetchOptions={getCompany}
                    onChange={onCompanyNameChange}
                    keys={["id", "companyName"]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <div className="create-new-company">
              Can't find your company?{" "}
              <span onClick={handleCreateNewCompany} className="create-new-btn">
                {" "}
                Create new
              </span>
            </div>
          </>
        );
      case 2:
        return (
          <div className="second-step">
            {!QS?.companyProfileId ? (
              <div className="header">
                <img
                  onClick={() => setCurrentStep(1)}
                  className="back-btn"
                  src={require("../../assets/images/icons/back.svg")}
                  alt=""
                />
              </div>
            ) : null}
            {!isCreateCompany && (
              <Row gutter={[32, 32]}>
                <Col
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    className="c-input"
                    label="First name"
                    rules={Rules.firstNameRule}
                    placeholder="Enter first name"
                    name="firstName">
                    <Input
                      autoComplete={"" + Math.random()}
                      placeholder="Enter first name"
                    />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    className="c-input"
                    label="Last name"
                    rules={Rules.lastNameRule}
                    name="lastName">
                    <Input
                      autoComplete={"" + Math.random()}
                      placeholder="Enter last name"
                    />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    name="mobile"
                    label="Mobile number"
                    className="c-input"
                    rules={Rules.phoneRule}>
                    <PhoneInput
                      placeholder="Enter your phone number."
                      country={countryCode}
                    />
                  </Form.Item>
                </Col>
                <Col
                  style={{ zIndex: 200 }}
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
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
                <Col
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Work email address"
                    name="email"
                    className="c-input"
                    rules={Rules.emailRule}>
                    <Input
                      autoComplete={"" + Math.random()}
                      placeholder="Enter your email"
                      type="text"
                    />
                  </Form.Item>
                </Col>
                <Col
                  style={{ zIndex: 100 }}
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    className="c-input"
                    name="findUsId"
                    label="How did you find us?"
                    rules={Rules.requiredRule}>
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
            )}
            {isCreateCompany && (
              <Row gutter={[32, 32]}>
                <Col style={{ marginBottom: "24px", zIndex: 300 }} span={24}>
                  <Upload
                    beforeUpload={profileImageBeforeUpload}
                    showUploadList={false}>
                    <div className="avatar-upload">
                      <div className="photo-square">
                        {profileImage && <img src={profileImage?.url} alt="" />}
                      </div>
                      {!profileImage && (
                        <Button>
                          <PlusOutlined />
                        </Button>
                      )}
                    </div>
                    <div style={{ fontSize: "12px", marginTop: "12px" }}>
                      Upload profile photo
                    </div>
                  </Upload>
                </Col>
                <Col
                  style={{ zIndex: 290 }}
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="I’m registering a"
                    name="companyType"
                    className="c-input"
                    rules={Rules.requiredRule}>
                    <Select
                      getPopupContainer={(trigger) => trigger.parentNode}
                      defaultValue="">
                      <Option value="">Select</Option>
                      <Option value="single-company">Single company</Option>
                      <Option value="headquarters">Headquarters</Option>
                      <Option value="branch">Branch within the company</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Company name"
                    name="companyName"
                    className="c-input"
                    rules={Rules.requiredRule}>
                    <Input autoComplete={"" + Math.random()} />
                  </Form.Item>
                </Col>

                <Col
                  style={{ zIndex: 270 }}
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    autoComplete={"" + Math.random()}
                    style={{ zIndex: 170 }}
                    label="Company location"
                    name="countryId"
                    className="c-input"
                    rules={Rules.requiredRule}>
                    <SuperSelect
                      getPopupContainer={(trigger) => trigger.parentNode}
                      fetchOptions={getCountry}
                      onSelect={handleLocationSelect}
                    />
                  </Form.Item>
                </Col>

                <Col
                  style={{ zIndex: 260 }}
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    style={{ zIndex: 170 }}
                    label="City"
                    name="cityId"
                    className="c-input"
                    rules={Rules.requiredRule}>
                    <SuperSelect
                      disabled={categoryId ? false : true}
                      dependencyId={categoryId}
                      getPopupContainer={(trigger) => trigger.parentNode}
                      fetchOptions={getCitiesByCountry}
                    />
                  </Form.Item>
                </Col>
                <Col
                  style={{ zIndex: 200 }}
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Company phone number"
                    name="companyPhone"
                    className="c-input"
                    rules={Rules.phoneRule}>
                    <PhoneInput
                      placeholder="Enter your phone number."
                      country={countryCode}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Website https://"
                    name="webUrl"
                    className="c-input"
                    rules={Rules.requiredRule}>
                    <Input autoComplete={"" + Math.random()} />
                  </Form.Item>
                </Col>
              </Row>
            )}
          </div>
        );
      case 3:
      default:
        return (
          <div className="third-step">
            <div className="header">
              <img
                onClick={() => setCurrentStep(2)}
                className="back-btn"
                src={require("../../assets/images/icons/back.svg")}
                alt=""
              />
            </div>
            {!isCreateCompany && (
              <Row gutter={[32, 32]}>
                <Col style={{ marginBottom: "24px" }} span={24}>
                  <Upload
                    beforeUpload={profileImageBeforeUpload}
                    showUploadList={false}>
                    <div className="avatar-upload">
                      <div className="photo-square">
                        {profileImage && <img src={profileImage?.url} alt="" />}
                      </div>
                      {!profileImage && (
                        <Button>
                          <PlusOutlined />
                        </Button>
                      )}
                    </div>
                    <div style={{ fontSize: "12px", marginTop: "12px" }}>
                      Upload profile photo
                    </div>
                  </Upload>
                </Col>
                <Col
                  style={{ zIndex: 300 }}
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Sector"
                    name="categoryId"
                    className="c-input"
                    rules={Rules.requiredRule}>
                    <SuperSelect
                      onSelect={(v) => {
                        setCategoryId(v);
                        form.resetFields(["jobTitleId"]);
                      }}
                      getPopupContainer={(trigger) => trigger.parentNode}
                      defaultValue=""
                      fetchOptions={getSector}
                    />
                  </Form.Item>
                </Col>
                <Col
                  style={{ zIndex: 160 }}
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Job title"
                    name="jobTitleId"
                    className="c-input"
                    rules={Rules.requiredRule}>
                    <SuperSelect
                      dependencyId={categoryId}
                      getPopupContainer={(trigger) => trigger.parentNode}
                      defaultValue=""
                      fetchOptions={getJobTitle}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Password"
                    name="password"
                    className="c-input"
                    rules={Rules.passwordRule}>
                    <Input.Password
                      autoComplete={"" + Math.random()}
                      type="password"
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Confirm password"
                    name="ConfirmPassword"
                    className="c-input"
                    rules={Rules.confirmPasswordRule}>
                    <Input.Password
                      autoComplete={"" + Math.random()}
                      type="password"
                    />
                  </Form.Item>
                </Col>
              </Row>
            )}
            {isCreateCompany && (
              <Row gutter={[32, 32]}>
                <Col
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    className="c-input"
                    label="First name"
                    rules={Rules.firstNameRule}
                    name="firstName">
                    <Input autoComplete={"" + Math.random()} />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    className="c-input"
                    label="Last name"
                    rules={Rules.lastNameRule}
                    name="lastName">
                    <Input autoComplete={"" + Math.random()} />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    name="mobile"
                    label="Mobile number"
                    className="c-input"
                    rules={Rules.phoneRule}>
                    <PhoneInput
                      placeholder="Enter your phone number."
                      country={countryCode}
                    />
                  </Form.Item>
                </Col>
                <Col
                  style={{ zIndex: 200 }}
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
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
                <Col
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Work email address"
                    name="email"
                    className="c-input"
                    rules={Rules.emailRule}>
                    <Input
                      autoComplete={"" + Math.random()}
                      placeholder="Enter your email"
                      type="text"
                    />
                  </Form.Item>
                </Col>
                <Col
                  style={{ zIndex: 170 }}
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Sector"
                    name="categoryId"
                    className="c-input"
                    rules={Rules.requiredRule}>
                    <SuperSelect
                      onSelect={(v) => {
                        setCategoryId(v);
                        form.resetFields(["jobTitleId"]);
                      }}
                      getPopupContainer={(trigger) => trigger.parentNode}
                      defaultValue=""
                      fetchOptions={getSector}
                    />
                  </Form.Item>
                </Col>
                <Col
                  style={{ zIndex: 160 }}
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Job title"
                    name="jobTitleId"
                    className="c-input"
                    rules={Rules.requiredRule}>
                    <SuperSelect
                      dependencyId={categoryId}
                      getPopupContainer={(trigger) => trigger.parentNode}
                      defaultValue=""
                      fetchOptions={getJobTitle}
                    />
                  </Form.Item>
                </Col>
                <Col
                  style={{ zIndex: 100 }}
                  xs={{ span: 24 }}
                  span={12}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    className="c-input"
                    name="findUsId"
                    label="How did you find us?"
                    rules={Rules.requiredRule}>
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
                <Col
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Password"
                    name="password"
                    className="c-input"
                    rules={Rules.passwordRule}>
                    <Input.Password
                      autoComplete={"" + Math.random()}
                      type="password"
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}>
                  <Form.Item
                    label="Confirm password"
                    name="ConfirmPassword"
                    className="c-input"
                    rules={Rules.confirmPasswordRule}>
                    <Input.Password
                      autoComplete={"" + Math.random()}
                      type="password"
                    />
                  </Form.Item>
                </Col>
              </Row>
            )}
          </div>
        );
    }
  };
  return (
    <div className="c-container auth-wrapper">
      <div className="signup-container with-form">
        <Form
          style={{ zIndex: "40" }}
          form={form}
          layout="vertical"
          className="employer-sign-up c-form second-container"
          onFinish={onFinish}>
          {renderSteps(currentStep)}

          {(currentStep === 2 || currentStep == 3) && (
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
              className="next-btn"
              htmlType="submit"
              themeColor="light"
              loading={isLoading}>
              Next
            </Button>
          )}

          {currentStep === 2 && (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                block
                className="next-btn-2"
                htmlType="submit"
                themeColor="light"
                loading={isLoading}>
                Next
              </Button>
            </div>
          )}
          {currentStep === 3 && (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                block
                className="next-btn-2"
                htmlType="submit"
                themeColor="light"
                loading={isLoading}>
                Submit
              </Button>
            </div>
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
