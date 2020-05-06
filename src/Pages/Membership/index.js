import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Login from "../Login";
import SigUp from "../SignUp";
import AuthLayout from "../../_layouts/auth/AuthLayout";
const Membership = ({}) => {
  return (
    <AuthLayout>
      {/* <Route exact path="/membership/login">
        <Login />
      </Route>
      <Route exact path="/membership/signup">
        <SigUp />
      </Route>
      <Route component={Login} /> */}
      <Route path="/" />
    </AuthLayout>
  );
};

export default Membership;
