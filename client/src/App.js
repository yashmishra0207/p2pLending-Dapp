import React, { useState } from "react";
import Web3 from "web3";
import { simpleStorageAbi } from "./abi/abis";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Auth from "./components/Auth";
import Main from "./components/Main";
import AppProvider from "./store/AppProvider";

const useStyles = makeStyles((theme) => ({}));

const web3 = new Web3(Web3.givenProvider);
const contractAddr = "0xA85325B396C8264aC2660Cb91a36e45C5040cA5e";
const SimpleContract = new web3.eth.Contract(simpleStorageAbi, contractAddr);

function App() {
  const classes = useStyles();

  const [number, setNumber] = useState(0);
  const [getNumber, setGetNumber] = useState("0x00");

  const handleGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.get().call();
    setGetNumber(result);
    console.log(result);
  };

  const handleSet = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    console.log(accounts, account, "before handle set gas");
    const gas = await SimpleContract.methods.set(number).estimateGas();
    const result = await SimpleContract.methods.set(number).send({
      from: account,
      gas,
    });
    console.log(result);
  };

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppProvider>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Main} />
          </Switch>
        </AppProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
