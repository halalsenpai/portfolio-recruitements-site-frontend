import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

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
} from "../features";

import Footer from "../app-ui/Footer/Footer";
import Header from "../app-ui/Header/Header";

function Routing() {
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
        <Route exact path="/employee-and-agency" component={EmployerAndAgency} />
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
