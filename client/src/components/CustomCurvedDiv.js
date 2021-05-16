import React from "react";

const CustomCurvedDiv = ({ color, index }) => {
  return (
    <div
      style={{
        position: "relative",
        top: "-10rem",
        left: "calc(50% - 60%)",
        marginBottom: "-18rem",
        borderRadius: "100%",
        paddingTop: "20rem",
        width: "120%",
        backgroundColor: color,
        zIndex: index,
      }}
    ></div>
  );
};

export default CustomCurvedDiv;
