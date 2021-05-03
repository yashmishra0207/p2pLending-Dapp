import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomHr from "./CustomHr";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
  gradient: {
    background: "linear-gradient(to right, dodgerblue, hotpink)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    width: "fit-content",
    margin: "auto",
  },
});

const Banner = (props) => {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      className={classes.root}
      style={{ backgroundColor: props.color && props.color, borderRadius: "0" }}
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
