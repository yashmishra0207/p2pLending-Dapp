import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "../resources/grow-up.svg";
import { Link } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
  title: {
    textShadow: "0px 0px 10px smokewhite",
    fontWeight: "bold",
    textTransform: "uppercase",
    background: "linear-gradient(to right, dodgerblue, hotpink)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    // '&:hover': {
    //   background: "linear-gradient(to right, dodgerblue, hotpink)",
    //   WebkitBackgroundClip: "none",
    //   WebkitTextFillColor: "white",
    // },
  },
  link: {
    marginLeft: "auto",
    textDecoration: "none",
    color: "inherit",
  },
}));

const CustomNavbar = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.root}
      >
        <Toolbar className={classes.root}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            style={{ backgroundColor: "transparent" }}
          >
            <img src={MenuIcon} className={classes.menuIcon} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Grow
          </Typography>
          <Link to="/auth/login" className={classes.link}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.title}
            >
              Get Started
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar style={{ width: "100%", height: "65px" }} />
    </>
  );
};

export default CustomNavbar;
