import React from "react";

const CustomSquedDiv = (props) => {
  return (
    <div
      style={{
        background: `linear-gradient(to top ${props.direction}, ${props.color1} 50%, ${props.color2} 50%)`,
        padding: "25px",
        width: "100%",
      }}
    ></div>
  );
};

export default CustomSquedDiv;
