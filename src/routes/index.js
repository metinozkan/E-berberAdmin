import React from "react";
import { Redirect } from "react-router-dom";

import { Switch } from "react-router-dom";
import Route from "./Route";
import GeneralInformation from "../Pages/GeneralInformation";
import Personnel from "../Pages/Personnel";
import Services from "../Pages/Services";
import ServiceDuration from "../Pages/ServiceDuration";
import ServicePrices from "../Pages/ServicePrices";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Membership from "../Pages/Membership";
import Calendar from "../Pages/Calendar";
import { BasicCalendar } from "../Pages/Calendar/BasicCalendar";
import { ResourceCalendar } from "../Pages/Calendar/ResourceCalendar";
import Agent from "../Utils/Agent";
import request from "superagent";
const Home = () => {
  return <Redirect to="/general-information" />;
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
      <Route path="/home" exact component={Home} />
      <Route path="/personnel" exact component={Personnel} />
      <Route path="/services" exact component={Services} />
      <Route path="/durations" exact component={ServiceDuration} />
      <Route path="/prices" exact component={ServicePrices} />
      <Route path="/general-information" exact component={GeneralInformation} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/calendar" exact component={Calendar} />
      <Route path="/basic-calendar" exact component={BasicCalendar} />
      <Route path="/resource-calendar" exact component={ResourceCalendar} />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}
