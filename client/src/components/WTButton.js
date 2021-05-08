import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    backgroundColor: (props) => (props.color ? props.color : "white"),
    border: `1px solid transparent`,
    color: (props) => (props.color ? "white" : "#222"),
    "&:hover": {
      backgroundColor: "transparent",
      color: (props) => (props.color ? props.color : "white"),
      border: (props) => `1px solid ${props.color ? props.color : "white"}`,
      boxSize: "border-box",
    },
  },
});

const WTButton = (props) => {
  const classes = useStyles(props);

  return (
    <Link to={props.url} style={{ textDecoration: "none" }}>
      <Button className={classes.button} variant="contained" disableElevation>
        {props.text}
      </Button>
    </Link>
  );
};

export default WTButton;
