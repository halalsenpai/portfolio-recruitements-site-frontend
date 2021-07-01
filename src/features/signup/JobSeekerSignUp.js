import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-input-international";
import {
  Input,
  Form,
  Checkbox,
  Popover,
  DatePicker,
  Select,
  Alert,
  Row,
  Col,
} from "antd";

import * as Rules from "../../utils/rules";
import Button from "../../shared-ui/Button/Button";
import Modal from "../../shared-ui/Modal/Modal";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import moment from "moment";
import {
  getRole,
  getFamilyStatus,
  jobseekerSignup,
  getCountryByIp,
} from "./thunk";
import {
  selectRole,
  selectFamilyStatus,
  selectJobseekerSignup,
  selectNationality,
  selectErrorMessage,
  selectLoadingStatus,
  selectCountryByIp,
} from "./slice";
import TermsConditions from "./TermsConditions";
import { getNationality } from "./service";
import { SuperSelect } from "../../shared-ui/SuperSelect/SuperSelect";
import { DobChecker } from "../../utils/helper";

const { Option } = Select;

let helperText = `This helps employers understand your family needs and accommodate accordingly such as booking you flights, 
  providing accommodation and benefits such as free or discounted tuition fees.`;

const WithHintText = ({ children }) => (
  <Popover
    placement="topLeft"
    overlayInnerStyle={{ width: 400 }}
    content={helperText}
    trigger="click">
    {children}
  </Popover>
);

function JobSeekerSignUp() {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [termsModalShow, setTermsModalShow] = useState(false);
  const [countryCode, setCountryCode] = useState("gb");

  const roles = useAppSelector(selectRole);
  const familyStatuses = useAppSelector(selectFamilyStatus);
  const nationalities = useAppSelector(selectNationality);
  const signupSuccess = useAppSelector(selectJobseekerSignup);
  const isLoading = useAppSelector(selectLoadingStatus);
  const errorMessage = useAppSelector(selectErrorMessage);

  const countryByIp = useAppSelector(selectCountryByIp);
  console.log(countryByIp);

  useEffect(() => {
    dispatch(getRole());
    dispatch(getFamilyStatus());

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
    delete values.confirmPassword;
    delete values.agreeTerms;
    // delete values.agreePrivacy;

    const role = roles.find((r) => r.title === "jobseeker");

    if (!role && !role.length) {
      return;
    }

    const payload = {
      ...values,
      roleId: role.id,
      dob: values.dob.toISOString(),
    };
    dispatch(jobseekerSignup(payload));
  };

  return (
    <div className="c-container auth-wrapper">
      <div className="signup-container with-form">
        {/* left container */}
        {/* form */}
        <Form
          autoComplete={false}
          style={{ zIndex: 90 }}
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="second-container c-form align-items-start jobseeker-sign-up-form">
          {/* <h3 className="form-title">
            Discover a new way of hiring & make the right connections.
          </h3> */}

          <Row gutter={[32, 0]}>
            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                label="First name"
                name="firstName"
                className="c-input"
                rules={Rules.firstNameRule}>
                <Input placeholder="Enter your first name" type="text" />
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                label="Last name"
                name="lastName"
                className="c-input"
                rules={Rules.lastNameRule}>
                <Input placeholder="Enter your last name" type="text" />
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                style={{ zIndex: 300 }}
                label="Mobile number"
                name="mobile"
                className="c-input"
                rules={Rules.phoneRule}>
                <PhoneInput
                  placeholder="Enter your mobile no."
                  country={countryCode}
                />
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                label="Email"
                name="email"
                className="c-input"
                rules={Rules.emailRule}>
                <Input placeholder="Enter your email" type="text" />
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                label="Password"
                name="password"
                className="c-input"
                rules={Rules.passwordRule}>
                <Input.Password placeholder="Enter password" type="password" />
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                className="c-input"
                rules={Rules.confirmPasswordRule}
                dependencies={["password"]}>
                <Input.Password placeholder="Enter password again" />
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                style={{ zIndex: 140 }}
                label={
                  <div className="c-label">
                    <label>Family status&nbsp;</label>
                    <WithHintText>
                      <img
                        class="label-icon"
                        src={require("../../assets/images/icons/information-icon.svg")}
                        alt=""
                      />
                    </WithHintText>
                  </div>
                }
                name="familyStatusId"
                className="c-input"
                rules={Rules.requiredRule}>
                <Select
                  getPopupContainer={(trigger) => trigger.parentNode}
                  size="large"
                  defaultValue="">
                  <Option value="">Select</Option>
                  {familyStatuses?.map((fs) => (
                    <Option value={fs.id}>{fs.title}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                style={{ zIndex: 120 }}
                label={
                  <div className="c-label">
                    <label>Gender&nbsp;</label>
                    <WithHintText>
                      <img
                        class="label-icon"
                        src={require("../../assets/images/icons/information-icon.svg")}
                        alt=""
                      />
                    </WithHintText>
                  </div>
                }
                name="gender"
                className="c-input"
                rules={Rules.requiredRule}>
                <Select
                  getPopupContainer={(trigger) => trigger.parentNode}
                  defaultValue="">
                  <Option value="">Select</Option>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                label={
                  <div className="c-label">
                    <label>Date of birth</label>
                  </div>
                }
                name="dob"
                className="c-input"
                rules={Rules.requiredRule}>
                <DatePicker
                  inputReadOnly
                  disabledDate={(d) => !d || d.isAfter("2004-12-01") || d.isSameOrBefore("1960-01-01")}
                  defaultPickerValue={moment("2000-01-01")}
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} span={12} md={{ span: 12 }}>
              <Form.Item
                style={{ zIndex: 100 }}
                label={
                  <div className="c-label">
                    <label>Passport nationality&nbsp;</label>
                    <WithHintText>
                      <img
                        class="label-icon"
                        src={require("../../assets/images/icons/information-icon.svg")}
                        alt=""
                      />
                    </WithHintText>
                  </div>
                }
                name="nationalityId"
                className="c-input"
                rules={Rules.requiredRule}>
                {/* <Select
                  getPopupContainer={(trigger) => trigger.parentNode}
                  size="large"
                  dropdownClassName="nationality-dropdown"
                  defaultValue="">
                  <Option value="">Select</Option>
                  {nationalities?.map((n) => (
                    <Option value={n.id}>{n.title}</Option>
                  ))}
                </Select> */}
                <SuperSelect
                  defaultValue=""
                  getPopupContainer={(trigger) => trigger.parentNode}
                  fetchOptions={getNationality}
                />
              </Form.Item>
            </Col>

            <span className="responsive-bottom-section">
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please select our terms & conditions",
                  },
                ]}
                name="agreeTerms"
                className="mb-0"
                style={{ marginLeft: "16px", marginTop: "16px" }}
                valuePropName="checked">
                <Checkbox>
                  I agree with Jobsmideast.com{" "}
                  <mark onClick={() => setTermsModalShow(true)}>
                    terms &amp; conditions
                  </mark>{" "}
                  and <mark>privacy policy.</mark>
                </Checkbox>
              </Form.Item>
              <Button
                className="create-profile-button"
                themeColor="light"
                type="large"
                htmlType="submit"
                loading={isLoading}
                block>
                Create my profile
              </Button>

              <Modal
                show={termsModalShow}
                onHide={() => setTermsModalShow(false)}>
                {" "}
                <TermsConditions />
              </Modal>

              {/* <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please agree to our data privacy statement",
                },
              ]}
              name="agreePrivacy"
              className="mb-0"
              valuePropName="checked">
              <Checkbox>
                I agree to Jobsmideast T&C’s, the data privacy statement, and to receive future emails, texts and
                communications.
              </Checkbox>
            </Form.Item> */}
            </span>

            {errorMessage && <Alert message={errorMessage} type="error" />}
          </Row>
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

export default JobSeekerSignUp;
