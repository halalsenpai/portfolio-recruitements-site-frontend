import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input, Form, Checkbox } from "antd";

import * as Rules from "../../utils/rules";
import { userTypes } from "../../utils/constants";
import Button from "../../shared-ui/Button/Button";
import "./_Login.scss";
import "./_Responsive.scss";

function Login() {
  const [userType, setUserType] = useState(userTypes.SEEKER);
  const onFinish = () => {};
  const getIsActive = (type) => {
    return userType === type ? "active" : "";
  };
  const getFormTitle = (type) => {
    switch (type) {
      case userTypes.AGENCY:
        return "Agency login";
      case userTypes.EMPLOYER:
        return "Employer login";
      case userTypes.SEEKER:
        return "Job Seeker login";
      default:
        return "";
    }
  };
  return (
    <div className="c-container auth-wrapper">
      <div className="c-card-container login-container">
        <div className="first-container">
          <img
            src={require("../../assets/images/logo/logo-white.png")}
            alt="logo"
          />
          {/* <p className="ml-4">The <b>smartest</b> job site in the Middle East.</p> */}
          <img
            className="login-background-image"
            src={require("../../assets/images/auth/login-background.png")}
            alt="img-bg"
          />
        </div>
        <div className="second-container">
          <div className="user-type">
            <span
              className={`${getIsActive(userTypes.SEEKER)}`}
              onClick={() => setUserType(userTypes.SEEKER)}
            >
              Job Seeker
            </span>
            <span
              className={`${getIsActive(userTypes.EMPLOYER)}`}
              onClick={() => setUserType(userTypes.EMPLOYER)}
            >
              Employer
            </span>
            <span
              className={`${getIsActive(userTypes.AGENCY)}`}
              onClick={() => setUserType(userTypes.AGENCY)}
            >
              Agency
            </span>
          </div>
          <Form className="c-form" onFinish={onFinish}>
            <h3 className="form-title w-100">
              <mark>{getFormTitle(userType)}</mark>
            </h3>
            <Form.Item name="email" className="c-input" rules={Rules.emailRule}>
              <label>Email</label>
              <Input placeholder="Email" size="large" type="email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={Rules.passwordRule}
              className="c-password-input mb-2"
            >
              <label>Password</label>
              <Input.Password
                placeholder="Password"
                className="c-input"
                size="large"
              />
            </Form.Item>

            <span className="d-flex justify-content-between align-items-center w-100 alt-text mt-2 forget-password-app">
              <Form.Item name="remember" className="mb-0">
                <Checkbox value="">Remember me</Checkbox>
              </Form.Item>
              <Link to="/forgot-password" className="alt-text">
                Forgot Password
              </Link>
            </span>
            <Form.Item>
              <Button
                type="large"
                htmlType="submit"
                // loading={true}
                block
              >
                Login
              </Button>
            </Form.Item>
            <Form.Item className="alt-text mb-0">
              <p className="mb-0">
                Don't have an account?{" "}
                <Link to="/sign-up">
                  <mark> Sign up</mark>
                </Link>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;