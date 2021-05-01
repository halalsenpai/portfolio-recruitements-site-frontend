import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Input, Form, Checkbox, Alert } from "antd";

import * as Rules from "../../utils/rules";
import { userTypes } from "../../utils/constants";
import Button from "../../shared-ui/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "./thunk";
import {
  selectLogin,
  selectLoginError,
  selectLoginResponse,
  selectLoginStatus,
} from "./slice";
import "./_Login.scss";
import "./_Responsive.scss";

function Login() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [userType, setUserType] = useState(userTypes.JOBSEEKER.title);
  const isLoading = useAppSelector(selectLoginStatus);
  const loginSuccess = useAppSelector(selectLogin);
  const loginErrorMessage = useAppSelector(selectLoginError);
  const loginResponse = useAppSelector(selectLoginResponse);

  useEffect(() => {
    if (loginSuccess === true) {
      // history.push("confirm-email");
    }
  }, [loginSuccess]);

  const getIsActive = (type) => {
    return userType === type ? "active" : "";
  };

  const getFormTitle = (type) => {
    switch (type) {
      case userTypes.AGENCY.title:
        return "Agency login";
      case userTypes.EMPLOYER.title:
        return "Employer login";
      case userTypes.JOBSEEKER.title:
        return "Job Seeker login";
      default:
        return "";
    }
  };

  const onFinish = (values) => {
    console.log("values: ", values);
    dispatch(login(values));
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
            {Object.keys(userTypes).map((ut) => (
              <span
                className={`${getIsActive(userTypes[ut].title)}`}
                onClick={() => setUserType(userTypes[ut].title)}
              >
                {userTypes[ut].title}
              </span>
            ))}
          </div>

          {/* Form */}
          <Form
            className="c-form login-form"
            layout="vertical"
            onFinish={onFinish}
          >
            <h3 className="form-title w-100">
              <mark>{getFormTitle(userType)}</mark>
            </h3>

            <label>Email *</label>
            <Form.Item name="email" className="c-input" rules={Rules.emailRule}>
              <Input placeholder="Enter your email" size="large" />
            </Form.Item>

            <label>Password *</label>
            <Form.Item
              name="password"
              className="c-input"
              rules={Rules.passwordRule}
            >
              <Input.Password placeholder="Enter your password" size="large" />
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
              <Button type="large" htmlType="submit" loading={isLoading} block>
                Login
              </Button>
            </Form.Item>

            {loginErrorMessage && (
              <Alert message={loginErrorMessage} type="error" />
            )}

            <Form.Item className="alt-text mb-0">
              <p className="mb-0">
                Don't have an account?{" "}
                <Link to="/signup">
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
