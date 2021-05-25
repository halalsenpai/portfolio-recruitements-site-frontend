import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-input-international";
import { Input, Form, Checkbox, Popover, DatePicker, Select, Alert } from "antd";

import * as Rules from "../../utils/rules";
import Button from "../../shared-ui/Button/Button";
import Modal from "../../shared-ui/Modal/Modal";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getRole, getFamilyStatus, getNationality, jobseekerSignup } from "./thunk";
import {
  selectRole,
  selectFamilyStatus,
  selectJobseekerSignup,
  selectNationality,
  selectErrorMessage,
  selectLoadingStatus,
} from "./slice";
import TermsConditions from "./TermsConditions";

const { Option } = Select;

let helperText = `This helps employers understand your family needs and accommodate accordingly such as booking you flights, 
  providing accommodation and benefits such as free or discounted tuition fees.`;

const WithHintText = ({ children }) => (
  <Popover placement="topLeft" overlayInnerStyle={{ width: 400 }} content={helperText} trigger="click">
    {children}
  </Popover>
);

function JobSeekerSignUp() {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [termsModalShow, setTermsModalShow] = useState(false);

  const roles = useAppSelector(selectRole);
  const familyStatuses = useAppSelector(selectFamilyStatus);
  const nationalities = useAppSelector(selectNationality);
  const signupSuccess = useAppSelector(selectJobseekerSignup);
  const isLoading = useAppSelector(selectLoadingStatus);
  const errorMessage = useAppSelector(selectErrorMessage);

  useEffect(() => {
    dispatch(getRole());
    dispatch(getFamilyStatus());
    dispatch(getNationality());
  }, []);

  useEffect(() => {
    if (signupSuccess === true) {
      history.push("confirm-email");
    }
  }, [signupSuccess]);

  const onFinish = (values) => {
    delete values.confirmPassword;
    delete values.agreeTerms;
    delete values.agreePrivacy;

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
        <div className="first-container">
          <img className="logo" src={require("../../assets/images/logo/logo-white.png")} alt="logo" />

          <span className="inner-container">
            <h3>
              <span>Looking for a new job?</span>
            </h3>

            <div className="box">
              <img src={require("../../assets/images/icons/signup-icons/sign-1.svg")} alt="img" />
              <span>
                <h3 className="b-text">One click apply</h3>
                <p>Short list jobs and apply All to them with 1 click</p>
              </span>
            </div>

            <div className="box">
              <img src={require("../../assets/images/icons/signup-icons/sign-2.svg")} alt="img" />

              <span>
                <h3 className="b-text">Job Match</h3>
                <p>Let our system do the work for you even while you sleep!</p>
              </span>
            </div>
            <div className="box">
              <img src={require("../../assets/images/icons/signup-icons/sign-3.svg")} alt="img" />
              <span>
                <h3 className="b-text">Direct chat + Inbox</h3>
                <p>Talk to employers & agencies in real time, no emails!</p>
              </span>
            </div>
            <div className="box">
              <img src={require("../../assets/images/icons/signup-icons/sign-4.svg")} alt="img" />
              <span>
                <h3 className="b-text">Follow Companies</h3>
                <p>Follow companies and stay up to date with all their jobs</p>
              </span>
            </div>
          </span>
        </div>

        {/* form */}
        <Form form={form} layout="vertical" onFinish={onFinish} className="second-container c-form align-items-start">
          <h3 className="form-title">Discover a new way of hiring & make the right connections.</h3>

          <div className="c-row">
            <Form.Item label="First name" name="firstName" className="c-input" rules={Rules.firstNameRule}>
              <Input placeholder="Enter your first name" size="small" type="text" />
            </Form.Item>

            <Form.Item label="Last name" name="lastName" className="c-input" rules={Rules.lastNameRule}>
              <Input placeholder="Enter your last name" size="small" type="text" />
            </Form.Item>
          </div>
          <div className="c-row">
            <Form.Item label="Mobile number" name="mobile" className="c-input" rules={Rules.phoneRule}>
              <PhoneInput placeholder="Enter your mobile no." country={"us"} />
            </Form.Item>

            <Form.Item label="Email" name="email" className="c-input" rules={Rules.emailRule}>
              <Input placeholder="Enter your email" size="small" type="text" />
            </Form.Item>
          </div>
          <div className="c-row">
            <Form.Item label="Password" name="password" className="c-input" rules={Rules.passwordRule}>
              <Input.Password placeholder="Enter password" size="small" type="password" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              className="c-input"
              rules={Rules.confirmPasswordRule}
              dependencies={["password"]}>
              <Input.Password placeholder="Enter password again" size="small" />
            </Form.Item>
          </div>
          <div className="c-row">
            <Form.Item
              label={
                <div className="c-label">
                  <label>Family status&nbsp;</label>
                  <WithHintText>
                    <img class="label-icon" src={require("../../assets/images/icons/information-icon.svg")} alt="" />
                  </WithHintText>
                </div>
              }
              name="familyStatusId"
              className="c-input"
              rules={Rules.requiredRule}>
              <Select size="large" defaultValue="">
                <Option value="">Select</Option>
                {familyStatuses?.map((fs) => (
                  <Option value={fs.id}>{fs.title}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label={
                <div className="c-label">
                  <label>Gender&nbsp;</label>
                  <WithHintText>
                    <img class="label-icon" src={require("../../assets/images/icons/information-icon.svg")} alt="" />
                  </WithHintText>
                </div>
              }
              name="gender"
              className="c-input"
              rules={Rules.requiredRule}>
              <Select size="large" defaultValue="">
                <Option value="">Select</Option>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="c-row">
            <Form.Item label="Date of birth" name="dob" className="c-input" rules={Rules.requiredRule}>
              <DatePicker />
            </Form.Item>

            <Form.Item
              label={
                <div className="c-label">
                  <label>Passport nationality&nbsp;</label>
                  <WithHintText>
                    <img class="label-icon" src={require("../../assets/images/icons/information-icon.svg")} alt="" />
                  </WithHintText>
                </div>
              }
              name="nationalityId"
              className="c-input"
              rules={Rules.requiredRule}>
              <Select size="large" defaultValue="">
                <Option value="">Select</Option>
                {nationalities?.map((n) => (
                  <Option value={n.id}>{n.title}</Option>
                ))}
              </Select>
            </Form.Item>
          </div>

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
              valuePropName="checked">
              <Checkbox>
                I agree with Jobsmideast.com <mark onClick={() => setTermsModalShow(true)}>terms &amp; conditions</mark>{" "}
                and <mark>privacy policy.</mark>
              </Checkbox>
            </Form.Item>

            <Modal show={termsModalShow} onHide={() => setTermsModalShow(false)}>
              {" "}
              <TermsConditions />
            </Modal>

            <Form.Item
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
            </Form.Item>
          </span>

          {errorMessage && <Alert message={errorMessage} type="error" />}

          <Form.Item className="mb-0 align-self-end">
            <Button themeColor="primary" type="large" htmlType="submit" loading={isLoading} block>
              Create my profile
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default JobSeekerSignUp;
