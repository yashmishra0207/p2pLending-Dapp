import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import CustomFloatingBubble from "../CustomFloatingBubble";
import Footer from "../Footer";
import TSDBanner from "../TSDBanner";
import Intro from "./Intro";
import TestItOut from "./TestItOut";
import WhyTakeLoan from "./WhyTakeLoan";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    color: "#fff",
    fontFamily: "poppins",
  },
  intro: {
    position: "relative",
    "background-image": "linear-gradient(to bottom, #382bc5 -100%, #ff3cac)",
  },
  centerBold: {
    textAlign: "center",
    fontWeight: "bold",
    // color: "#0e1766",
    color: "#fff",
    fontFamily: "poppins",
  },
  largeText: {
    fontFamily: "poppins",
    textAlign: "center",
    fontSize: "8rem",
    lineHeight: "8rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "6rem",
      lineHeight: "6rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      lineHeight: "4rem",
    },
  },
  headerText: {
    position: "relative",
    fontFamily: "poppins",
    textAlign: "center",
    fontSize: "4rem",
    lineHeight: "4.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      lineHeight: "3.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
  },
  gradientText: {
    zIndex: "1",
    background: "linear-gradient(to right, dodgerblue, hotpink)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  shortDetail: {
    padding: "0 20%",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "0 10%",
    },
  },
  coupleHighFive: {
    zIndex: "0",
    width: "50%",
    left: "calc((100vw - 50%) / 2)",
    top: "-2.5rem",
    position: "relative",
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      top: "-1rem",
      width: "400px",
      left: "calc((100vw - 400px) / 2)",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-1rem",
      width: "260px",
      left: "calc((100vw - 260px) / 2)",
      marginBottom: "1rem",
    },
  },
  zIndex1: {
    zIndex: "1",
  },
  zIndex2: {
    zIndex: "2",
  },
  zIndex3: {
    zIndex: "3",
  },
  bubbleBig: {
    width: 300,
    height: 300,
    top: 140,
    left: -460,
    [theme.breakpoints.down("sm")]: {
      width: 200,
      height: 200,
      top: 110,
      left: -330,
    },
    [theme.breakpoints.down("xs")]: {
      width: 120,
      height: 120,
      top: 110,
      left: -200,
    },
  },
  bubbleMedium: {
    width: 140,
    height: 140,
    top: 510,
    left: 200,
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 100,
      top: 360,
      left: 140,
    },
    [theme.breakpoints.down("xs")]: {
      width: 60,
      height: 60,
      top: 270,
      left: 110,
    },
  },
  bubbleSmall: {
    width: 70,
    height: 70,
    top: 610,
    left: -340,
    [theme.breakpoints.down("sm")]: {
      width: 60,
      height: 60,
      top: 410,
      left: -230,
    },
    [theme.breakpoints.down("xs")]: {
      width: 40,
      height: 40,
      top: 310,
      left: -160,
    },
  },
  bubbleContainer: {
    position: "absolute",
    left: "50%",
  },
  shiftBubbleContainer: {
    top: "-12rem",
    [theme.breakpoints.down("sm")]: {
      top: "-10rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-2rem",
    },
  },
  cardsContainer: {
    zIndex: "5",
    position: "relative",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  sectionPadding: {
    padding: "5rem 0",
    [theme.breakpoints.down("sm")]: {
      padding: "4rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3rem 0",
    },
  },
}));

const ApplyLoan = () => {
  const classes = useStyles();

  return (
    <div style={{ overflow: "hidden" }}>
      <Intro classes={classes} />

      <TestItOut props={classes} />

      <div className={classes.sectionPadding}>
        <Typography
          className={clsx(classes.largeText, classes.gradientText)}
          style={{ lineHeight: "normal" }}
        >
          Instant Approval
          <br />
        </Typography>
        <Typography
          variant="h3"
          style={{
            fontFamily: "Nanum Myeongjo",
            color: "rgb(14, 23, 102)",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          no credit check required
        </Typography>
      </div>

      <WhyTakeLoan props={classes} />

      <TSDBanner
        props={{
          ...classes,
          title: <span className={classes.gradientText}>Ready to achieve</span>,
          subtitle: (
            <span style={{ color: "#0e1766" }}>your financial freedom?</span>
          ),
          detail: (
            <span style={{ color: "#0e1766" }}>
              Built by HODLers for HODLers
            </span>
          ),
        }}
      >
        <div
          className={clsx(
            classes.bubbleContainer,
            classes.shiftBubbleContainer
          )}
        >
          <CustomFloatingBubble
            props={classes.bubbleBig}
            animationDelay="0.1s"
          />
          <CustomFloatingBubble
            props={classes.bubbleMedium}
            animationDelay="0.5s"
          />
          <CustomFloatingBubble
            props={classes.bubbleSmall}
            animationDelay="0.9s"
          />
        </div>
      </TSDBanner>

      <Footer />
    </div>
  );
};

export default ApplyLoan;
