import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    color: "#222",
    "-webkit-tap-highlight-color": "transparent",
    "-webkit-touch-callout": "none",
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
  },
  switchContainer: {
    background: "linear-gradient(to right, hotpink, dodgerblue)",
    color: "white",
    width: "fit-content",
    border: "0.1rem solid white",
    padding: "0.2rem",
    display: "flex",
    position: "relative",
    borderRadius: "2rem",
    cursor: "pointer",
  },
  selector: {
    backgroundColor: "white",
    color: "hotpink",
    width: "fit-content",
    position: "absolute",
    padding: "0.8rem 1.3rem",
    transition: "all 0.3s ease",
    borderRadius: "2rem",
    fontWeight: "bold",
  },
  options: {
    padding: "0.8rem 1.3rem",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    marginRight: "0.3rem",
    display: "flex",
    flexWrap: "wrap",
    flexGrow: "1",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

const onClickHandler = (e, handleSet, options, unique) => {
  let selectorLeft = 0;
  for (let i = 0; i < options.length; i++) {
    if (`${unique}${i + 1}${options[i]}` === e.target.id) {
      break;
    }
    selectorLeft += document.getElementById(`${unique}${i + 1}${options[i]}`)
      .clientWidth;
  }
  document.getElementById(unique + 0 + options[0]).style.left =
    "calc(0.2rem + " + selectorLeft + "px)";
  document.getElementById(unique + 0 + options[0]).style.clientWidth =
    e.target.clientWidth + "px";
  handleSet(e.target.innerHTML);
};

const CustomSelectSlider = (props) => {
  const classes = useStyles();

  const unique = Math.random() * 1000;

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        style={{ color: props.color || "#222" }}
      >
        {props.title}
      </Typography>
      <div className={classes.switchContainer}>
        <span id={unique + 0 + props.options[0]} className={classes.selector}>
          {props.value}
        </span>
        {props.options.map((option, index) => (
          <span
            key={index}
            id={`${unique}${index + 1}${option}`}
            className={classes.options}
            onClick={(e) =>
              onClickHandler(e, props.handleSet, props.options, unique)
            }
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomSelectSlider;
