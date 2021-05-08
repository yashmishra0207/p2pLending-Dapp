import React from "react";
import CustomITDCard from "../CustomITDCard";
import {
  EventAvailable,
  FastForward,
  NotInterested,
  TrendingDown,
} from "@material-ui/icons";

const graphics = [
  <TrendingDown />,
  <FastForward />,
  <NotInterested />,
  <EventAvailable />,
];

const titles = [
  "Low-Interest Rates",
  "Quick and Hassle Free",
  "No Prepayment Penalty",
  "Funding in a Few Days",
];

const details = [
  "Grow is one of the best peer-to-peer lending platform in India which provides investors an opportunity to invest as per their preference that may earn up to 30% returns",
  "We provide “Free” collection and legal recovery support for all loans lent on our platform. We have a well-defined process in place to ensure a hassle-free experience for investors.",
  "Each loan project undergoes through a very stringent credit analysis including CIBIL check and physical verification so that diverse yet robust set of loan projects are listed.",
  "At Grow, we have put in place one of the highest data security and safety standards to keep your data protected and confidential at all times.",
];

const WhyBorrow = () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {titles.map((value, index) => (
        <CustomITDCard
          width="220px"
          key={index}
          graphic={graphics[index]}
          title={value}
          detail={details[index]}
          color="dodgerblue"
        />
      ))}
    </div>
  );
};

export default WhyBorrow;
