import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: (props) => props.width,
    overflow: "visible",
    margin: "1rem 0.7rem",
    marginTop: "3rem",
    color: "black",
    backgroundColor: "white",
    paddingTop: "1.5rem",
    border: (props) => `0.1rem solid ${props.color}`,
    boxShadow: (props) => `0 0.3rem 0 ${props.color}`,
    curson: "pointer",
    transition: "color 0.3s, background-color 0.3s",
    "&:hover": {
      backgroundColor: (props) => props.color,
      color: "white",
      transition: "color 0.3s, background-color 0.3s",
      "& $title": {
        color: "white",
      },
    },
  },
  title: { color: (props) => props.color, textAlign: "center" },
  graphic: {
    color: (props) => props.color,
    position: "relative",
    "& svg": {
      position: "absolute",
      top: "-4.25rem",
      left: (props) => `calc(${props.width} / 2 - 2.5rem)`,
      width: "5rem",
      height: "5rem",
      padding: "1rem",
      borderRadius: "50%",
      border: (props) => "1px solid " + props.color,
      backgroundColor: "white",
    },
  },
});

const CustomITDCard = (props) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <span className={classes.graphic}>{props.graphic}</span>
      <CardContent>
        <Typography variant="h6" gutterBottom className={classes.title}>
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          style={{ textAlign: "center" }}
        >
          {props.detail}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomITDCard;
