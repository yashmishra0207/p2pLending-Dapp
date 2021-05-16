import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  floating: {
    animationName: "$float",
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  "@keyframes float": {
    "0%": {
      transform: "translate(0, 0px)",
    },
    "50%": {
      transform: "translate(0, 25px)",
    },
    "100%": {
      transform: "translate(0, 0px)",
    },
  },
});

const CustomFloatingBubble = ({ props, animationDelay }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        background: "linear-gradient(to top right, #ff3cac, #88c5eb)",
        borderRadius: "100%",
        position: "absolute",
        animationDelay,
      }}
      class={props + " " + classes.floating}
    ></div>
  );
};

export default CustomFloatingBubble;
