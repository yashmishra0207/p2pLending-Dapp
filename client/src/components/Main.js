import React, { useContext } from "react";
import { Route, Switch } from "react-router";
import ApplyLoan from "./Applypage/ApplyLoan";
import Auth from "./Auth";
import CustomNavbar from "./CustomNavbar";
import Homepage from "./Homepage/Homepage";
import InvestNow from "./InvestNow";
import AppContext from "../store/AppProvider";

const Main = () => {
  console.log(useContext(AppContext));
  return (
    <div style={{ maxWidth: "1024px", margin: "auto" }}>
      <CustomNavbar />
      <Switch>
        <Route path="/applyloan" component={ApplyLoan} />
        <Route path="/invest" component={InvestNow} />
        <Route path="/" component={Homepage} />
        <Route path="/app" component={Auth} />
      </Switch>
    </div>
  );
};

export default Main;
