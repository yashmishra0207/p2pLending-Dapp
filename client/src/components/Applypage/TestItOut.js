import { makeStyles, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomSelectSlider from "../CustomSelectSlider";
import clsx from "clsx";
import { AttachMoney } from "@material-ui/icons";
import TSDBanner from "../TSDBanner";
import CustomFloatingBubble from "../CustomFloatingBubble";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    color: "#fff",
  },
  card: {
    position: "relative",
    borderRadius: "1rem",
    background: "linear-gradient(to right, dodgerblue, hotpink)",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  fontMargin: {
    margin: "5rem 0 4rem",
    [theme.breakpoints.down("md")]: {
      margin: "3rem 0 2rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "1.5rem 0 1rem",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      padding: "1rem",
    },
    padding: "2rem",
  },
}));

const handleLoanAmountChange = (
  loanAmount,
  loanTerm,
  ltv,
  setCollateral,
  setInterest
) => {
  let apr;
  if (ltv == 25) {
    apr = 1;
  } else if (ltv == 33) {
    apr = 6.95;
  } else if (ltv == 50) {
    apr = 8.95;
  }
  setCollateral((loanAmount * (100 / ltv) * 0.00026).toFixed(4));
  setInterest((loanAmount * ((apr / (100 * 2)) * (loanTerm / 6))).toFixed(2));
};

const TestItOut = ({ props }) => {
  const classes = useStyles();

  const [loanTerm, setLoanTerm] = useState(6);
  const [ltv, setLtv] = useState("25%");
  const [loanAmount, setLoanAmount] = useState(500);
  const [collateralNeeded, setCollateralNeeded] = useState(0);
  const [totalInterest, setTotalInterest] = useState(1);

  useEffect(() => {
    handleLoanAmountChange(
      loanAmount,
      loanTerm,
      ltv.slice(0, -1),
      setCollateralNeeded,
      setTotalInterest
    );
  }, [loanAmount, loanTerm, ltv]);

  return (
    <TSDBanner
      props={{
        ...props,
        gradientBackground: "linear-gradient(to bottom left, #88c5eb, #ff3cac)",
        title: "Test it out",
        subtitle: "and see how it feels",
        detail:
          "Enter your desired loan amount to see how much crypto you’ll need as collateral.",
      }}
    >
      <div className={clsx(props.bubbleContainer, props.shiftBubbleContainer)}>
        <CustomFloatingBubble props={props.bubbleBig} animationDelay="0.1s" />
        <CustomFloatingBubble
          props={props.bubbleMedium}
          animationDelay="0.5s"
        />
        <CustomFloatingBubble props={props.bubbleSmall} animationDelay="0.9s" />
      </div>
      <div className={classes.root}>
        <div className={clsx(classes.card, props.zIndex3)}>
          <form
            style={{
              // backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "0.5rem",
            }}
          >
            <Grid container xl={12} className={classes.gridContainer}>
              <Grid
                item
                sm={6}
                style={{ alignSelf: "center", margin: "0.5rem 0" }}
              >
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AttachMoney />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="loan_amount"
                        label="Enter Loan Amount"
                        type="number"
                        color="secondary"
                        InputProps={{
                          inputProps: { min: 500 },
                          style: { color: "white", fontWeight: "bold" },
                        }}
                        onChange={(e) => {
                          setLoanAmount(e.target.value);
                        }}
                        value={loanAmount}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item sm={6} style={{ alignSelf: "center" }}>
                <CustomSelectSlider
                  id="loan_term"
                  color="white"
                  options={[6, 12, 24, 36]}
                  handleSet={setLoanTerm}
                  value={loanTerm}
                  title="Loan term in months"
                />
              </Grid>
              <Grid
                item
                sm={6}
                style={{ alignSelf: "center", margin: "0.5rem 0" }}
              >
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <img
                        style={{ width: "1.5rem", height: "1.5rem" }}
                        src="https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png"
                        alt="eth"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="collateral_needed"
                        label="Collateral Needed"
                        InputProps={{
                          inputProps: { min: 0 },
                          style: { color: "white", fontWeight: "bold" },
                        }}
                        type="number"
                        color="secondary"
                        disabled
                        value={collateralNeeded}
                      ></TextField>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item sm={6} style={{ alignSelf: "center" }}>
                <CustomSelectSlider
                  id="ltv"
                  color="white"
                  options={["25%", "33%", "50%"]}
                  handleSet={setLtv}
                  value={ltv}
                  title="Loan to value (LTV)"
                />
              </Grid>
            </Grid>
          </form>
        </div>
        <div className={classes.fontMargin}>
          <Typography variant="h6" className={props.centerBold}>
            Total Interest in USD
          </Typography>
          <Typography className={clsx(props.centerBold, props.largeText)}>
            ${totalInterest}
          </Typography>
        </div>
        <div
          style={{ display: "flex", textAlign: "center", marginBottom: "0" }}
        >
          <Typography
            variant="h6"
            className={props.centerBold}
            style={{ width: "55%" }}
          >
            Cost per month
          </Typography>
          <Typography
            variant="h6"
            className={props.centerBold}
            style={{ width: "45%" }}
          >
            APR
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            marginTop: "0",
          }}
          className={classes.fontMargin}
        >
          <Typography
            variant="h3"
            className={props.centerBold}
            style={{ width: "55%" }}
          >
            ${(totalInterest / loanTerm).toFixed(2)}
          </Typography>
          <Typography
            variant="h3"
            className={props.centerBold}
            style={{ width: "45%" }}
          >
            {ltv.slice(0, -1) === "25"
              ? `1.00`
              : ltv.slice(0, -1) === "33"
              ? 6.95
              : 8.95}
            %
          </Typography>
        </div>
      </div>
    </TSDBanner>
  );
};

export default TestItOut;
