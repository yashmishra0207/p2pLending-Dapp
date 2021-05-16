import { Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const TSDBanner = ({ props, children }) => {
  return (
    <div
      className={clsx(props.sectionPadding)}
      style={{ background: props.gradientBackground, position: "relative" }}
    >
      <Typography
        className={clsx(props.headerText, props.zIndex3)}
        style={{ color: "white", lineHeight: "normal" }}
      >
        {props.title}
        <br />
        <span
          style={{
            fontWeight: "thin",
            fontFamily: "Nanum Myeongjo",
            color: "white",
          }}
        >
          {props.subtitle}
        </span>
      </Typography>
      <Typography
        variant="body1"
        className={clsx(props.shortDetail, props.zIndex3)}
        style={{
          fontWeight: "bold",
          color: "white",
          margin: "2.5rem 0 5rem",
          position: "relative",
        }}
      >
        {props.detail}
      </Typography>
      {children}
    </div>
  );
};

export default TSDBanner;
