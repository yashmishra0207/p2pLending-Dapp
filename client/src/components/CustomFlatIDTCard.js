import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    gradientText: {
      fontFamily: "poppins",
      fontWeight: "bold",
      background: "linear-gradient(left, #0e1766, #382bc5)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "2.5rem",
    },
    card: {
      zIndex: "3",
      boxShadow: (flat) =>
        flat === true ? "" : "0 20px 60px 0 rgb(0 0 0 / 5%)",
      padding: "3rem 2rem",
      backgroundColor: (flat) => (flat === true ? "" : "white"),
      flex: "0 0 auto",
      margin: "1rem calc((50% - 336px) / 2)",
      textAlign: (flat) => (flat === true ? "" : "center"),
      width: "336px",
      transition: "transform 0.3s",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        margin: "1rem 3rem",
        flex: "1 0 auto",
      },
      [theme.breakpoints.down("xs")]: {
        width: "calc(100% - 2rem)",
        margin: "1rem",
        flex: "1 0 auto",
      },
      "&:hover": {
        [theme.breakpoints.up("md")]: {
          transform: (flat) => (flat === true ? "" : "translateY(-1rem)"),
          transition: "transform 0.3s",
        },
      },
    },
  };
});

const CustomFlatIDTCard = ({ img, title, detail, flat }) => {
  const classes = useStyles(flat);

  return (
    <div className={classes.card}>
      <img
        src={img}
        alt="card img"
        style={{ height: "100px", width: "auto", marginBottom: "1.5rem" }}
      />
      <Typography variant="h5" className={classes.gradientText}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        style={{ color: "#0e1766", fontWeight: "bold" }}
      >
        {detail}
      </Typography>
    </div>
  );
};

export default CustomFlatIDTCard;
