import React from "react";
import { Route, Switch } from "react-router";
import Auth from "./Auth";
import CustomNavbar from "./CustomNavbar";
import Homepage from "./Homepage/Homepage";

const Main = () => {
  return (
    <div style={{ maxWidth: "1024px", margin: "auto" }}>
      <CustomNavbar />
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/app" component={Auth} />
      </Switch>
    </div>
  );
};

export default Main;
