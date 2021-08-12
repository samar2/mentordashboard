import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import Table from "./Table";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Table}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
    </Switch>
  );
}
