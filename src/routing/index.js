import React, { Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import storage from "redux-persist/lib/storage";

import {
  Home,
  Test,
  Login,
  SignUp,
  JobSeekerSignUp,
  ForgotPassword,
  AgencySignUp,
  ConfirmEmail,
  EmployerSignUp,
  EmployerAndAgency,
  JobSeekers,
  Pricing,
  Jobs,
  Services,
  TermsAndCondition,
  CookiePolicy,
  PrivacyPolicy,
} from "../features";

import Footer from "../app-ui/Footer/Footer";
import Header from "../app-ui/Header/Header";
import { userTypes } from "../utils/constants";
import { persistor } from "../store"; // or w/e

function Routing() {
  const param = useLocation().search;
  const logout = new URLSearchParams(param).get("logout");
  console.log(logout);
  if (logout == "true") {
    localStorage.clear();
    persistor.flush();
    storage.removeItem("persist:root");
  } else {
    const token = localStorage.getItem("token");
    const r = localStorage.getItem("role");
    if (token != null && r != null) {
      const role = JSON.parse(r);
      if (role && role.title) {
        const url = userTypes[role.title.toUpperCase()].url;
        if (url) {
          window.location = `${url}/?token=${token}`;
        }
      }
    }
  }
  return (
    <Fragment>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user-signup" component={JobSeekerSignUp} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/agency-signup" component={AgencySignUp} />
        <Route exact path="/confirm-email" component={ConfirmEmail} />
        <Route exact path="/employer-signup" component={EmployerSignUp} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/terms-and-condition"
          component={TermsAndCondition}
        />
        <Route exact path="/cookie-policy" component={CookiePolicy} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route
          exact
          path="/employee-and-agency"
          component={EmployerAndAgency}
        />
        <Route exact path="/job-seekers" component={JobSeekers} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/jobs" component={Jobs} />
        <Route path="/test" component={Test} />

        <Route
          path="*"
          render={() => (
            <div>
              <h1>Not Found</h1>
            </div>
          )}
        />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default Routing;
