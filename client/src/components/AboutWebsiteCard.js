import { Typography } from "@material-ui/core";
import React from "react";

const AboutWebsiteCard = (props) => {
  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <a href={props.weblink}>
        <img
          src={props.icon}
          alt="tech icon"
          style={{ width: "100px", height: "100px" }}
        />
      </a>
      <Typography>{props.title}</Typography>
    </div>
  );
};

export default AboutWebsiteCard;
