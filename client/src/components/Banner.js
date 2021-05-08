import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomHr from "./CustomHr";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: "1.5rem 0",
    borderRadius: "0",
    [theme.breakpoints.up("md")]: {
      padding: "2.5rem 0",
    },
  },
  gradient: {
    background: "linear-gradient(to right, dodgerblue, hotpink)",
    textAlign: "center",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    width: "fit-content",
    margin: "auto",
  },
}));

const Banner = (props) => {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      className={classes.root}
      style={{ backgroundColor: props.color ? props.color : "white" }}
    >
      <CardContent>
        <Typography variant="h4" className={classes.gradient}>
          {props.heading}
        </Typography>
        <CustomHr />
        {props.content}
      </CardContent>
    </Card>
  );
};

export default Banner;
