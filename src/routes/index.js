import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import GeneralInformation from "../Pages/GeneralInformation";
import Personnel from "../Pages/Personnel";
import Services from "../Pages/Services";
import ServiceDuration from "../Pages/ServiceDuration";
const Home = () => {
  return <h1>home</h1>;
};

const Customers = () => {
  return <h1>Customers</h1>;
};
const Orders = () => {
  return <h1>Orders</h1>;
};
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/personnel" exact component={Personnel} />
      <Route path="/services" exact component={Services} />
      <Route path="/durations" exact component={ServiceDuration} />

      <Route path="/general-information" exact component={GeneralInformation} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      {/* <Route component={"Login"} /> */}
    </Switch>
  );
}
