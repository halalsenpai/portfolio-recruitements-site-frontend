import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Radio } from "antd";

import { userTypes } from "../../utils/constants";
import Button from "../../shared-ui/Button/Button";
import "./_SignUp.scss";
import "./_Responsive.scss";

function SignUp() {
  const [userType, setUserType] = useState(userTypes.JOBSEEKER.title);
  const history = useHistory();

  const onFinish = useCallback(() => {
    switch (userType) {
      case userTypes.JOBSEEKER.title:
        history.push("user-signup");
        return;
      case userTypes.EMPLOYER.title:
        history.push("employer-signup");
        return;
      case userTypes.AGENCY.title:
        history.push("agency-signup");
        return;
      default:
        history.push("user-signup");
        return;
    }
  }, [userType]);

  const onChange = (e) => {
    setUserType(e.target.value);
  };

  return (
    <div className="c-container auth-wrapper">
      <div className="signup-container with-form role-container">
        <div className="first-container role-select">
          <img className="logo" src={require("../../assets/images/logo/logo-white.png")} alt="logo" />
        </div>
        <Form className="second-container c-form w-100 signup-option" onFinish={onFinish}>
          {/* <img
            src={require("../../assets/images/auth/signup-illus.png")}
            alt="logo"
          /> */}

          <span class="mt-3">
            <h3 className="form-title">
              <mark>Create an account</mark>
            </h3>

            <Radio.Group onChange={onChange} value={userType}>
              <Radio value={userTypes.JOBSEEKER.title}>I'm looking for jobs</Radio>

              <Radio value={userTypes.EMPLOYER.title}>I'm an employer</Radio>

              {/* <Radio value={userTypes.AGENCY.title}>I'm a recruiter</Radio> */}
            </Radio.Group>
          </span>

          <Form.Item>
            <Button
              type="large"
              htmlType="submit"
              // loading={true}
              block
              themeColor="primary">
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
