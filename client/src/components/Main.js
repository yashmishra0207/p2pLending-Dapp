import React from "react";
import { Route, Switch } from "react-router";
import App from "../App";
import CustomNavbar from "./CustomNavbar";
import Homepage from "./Homepage";

const Main = () => {
  return (
    <>
      <CustomNavbar />
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/app" component={App} />
      </Switch>
    </>
  );
};

export default Main;
