import { Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(to right, dodgerblue, blueviolet, deeppink, hotpink)",
          padding: "0.2rem",
          textAlign: "right",
        }}
      ></div>
      <div style={{ padding: "2rem", backgroundColor: "#222" }}>
        <Typography style={{ textAlign: "right", color: "gray" }}>
          - website designed by{" "}
          <span
            style={{
              background: "linear-gradient(to right, dodgerblue, hotpink)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            <a
              href="https://linkedin.com/in/yashmishra0207/"
              style={{ textDecoration: "none" }}
            >
              Yash Mishra
            </a>
          </span>
        </Typography>
      </div>
    </>
  );
};

export default Footer;
