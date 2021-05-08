import React from "react";
import Blockchain from "../resources/blockchain.svg";

const CustomHr = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <hr
        style={{
          width: "150px",
          margin: "0 0 0 auto",
          padding: "1px",
          border: "0",
          background:
            "linear-gradient(to right, transparent, dodgerblue, dodgerblue)",
          // WebkitBackgroundClip: "border",
          // WebkitTextFillColor: "transparent",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${Blockchain})`,
          backgroundSize: "contain",
          margin: "0 -4px",
          width: "30px",
          height: "30px",
        }}
      ></div>
      <hr
        style={{
          width: "150px",
          margin: "0 auto 0 0",
          border: "0",
          padding: "1px",
          background:
            "linear-gradient(to right, hotpink, hotpink, transparent)",
          // WebkitBackgroundClip: "border",
          // WebkitTextFillColor: "transparent",
        }}
      />
    </div>
  );
};

export default CustomHr;
