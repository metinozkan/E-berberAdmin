import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import DefaultLayout from "../_layouts/default/DefaultLayout";
import AuthLayout from "../_layouts/auth/AuthLayout";
import { Storage } from "../Utils/importFiles";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const signed = true;
  const [barber, setBarber] = useState(
    Storage.GetItem("barber") ? Storage.GetItem("barber") : false
  );
  // const [signed, setSigned] = useState(barber ? true : false);
  const [signed, setSigned] = useState(true);

  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  // if (isPrivate && !signed) {
  //   return <Redirect to="/" />;
  // }

  // /**
  //  * Redirect user to Main page if he tries to access a non private route
  //  * (SignIn or SignUp) after being authenticated.
  //  */
  // if (!isPrivate && signed) {
  //   return <Redirect to="/home" />;
  // }

  const Layout = signed ? DefaultLayout : AuthLayout;

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout setSigned={setSigned}>
          <Component
            {...props}
            signed={signed}
            setSigned={setSigned}
            barber={barber}
          />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
