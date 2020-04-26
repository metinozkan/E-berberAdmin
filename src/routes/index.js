import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

const Home = () => {
  return <h1>home</h1>;
};

const Login = () => {
  return <h1>Login</h1>;
};
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={"Login"} />
    </Switch>
  );
}
