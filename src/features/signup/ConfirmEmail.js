import React, { useEffect } from "react";

import { Spin } from "antd";
import { useHistory } from "react-router";

import { confirmEmail, getRole } from "./thunk";
import { userTypes } from "../../utils/constants";
import CardWithLines from "../../shared-ui/CardWithLines/CardWithLines";
import { useAppDispatch, useAppSelector, useQuery } from "../../store/hooks";
import {
  selectConfirmEmail,
  selectConfirmEmailResponse,
  selectLoadingStatus,
  selectRole,
} from "./slice";

function ConfirmEmail() {
  let query = useQuery();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const confirmEmailSuccess = useAppSelector(selectConfirmEmail);
  const confirmEmailResponse = useAppSelector(selectConfirmEmailResponse);
  const roles = useAppSelector(selectRole);
  const isLoading = useAppSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(getRole());
    const token = query.get("token");
    if (token) {
      localStorage.setItem("token", token);
      dispatch(confirmEmail());
    }
  }, []);

  useEffect(() => {
    if (confirmEmailSuccess && roles.length) {
      const token = confirmEmailResponse.token;
      const roleId = confirmEmailResponse.roleId;
      const role = roles.find((r) => r.id === roleId);
      if (role) {
        const url = userTypes[role.title.toUpperCase()].url;
        localStorage.removeItem("token");
        if (url) {
          window.location = `${url}/?token=${token}`;
        }
      }
    }
  }, [confirmEmailSuccess, roles]);

  return (
    <Spin tip="Please wait..." spinning={isLoading}>
      <div className="c-container auth-wrapper">
        <CardWithLines className="confirm-email-card">
          <div className="inner-container">
            <img
              className="mail-icon"
              src={require("../../assets/images/icons/mail-icon.svg")}
              alt="icon"
            />
            <h5>
              <mark className="blue">Please confirm your email address.</mark>
            </h5>
            <div className="divider"></div>
            <p>
              To activate your account you need to confirm your email address.
              Please check your spam emails if you haven't received an email
              yet.
            </p>
            {/* <button className="btn btn-link">Send me another email</button> */}
          </div>
        </CardWithLines>
      </div>
    </Spin>
  );
}

export default ConfirmEmail;
