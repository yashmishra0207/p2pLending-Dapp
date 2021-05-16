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
  "Borrowers can get P2P loans at attractive interest rates as we go beyond CIBIL and assess their profile based on 40+ parameters using our proprietary credit score model.",
  "Grow provides a seamless user experience in terms of ease of transaction, ability to view detailed account statements, transaction analysis, and many more features.",
  "At Grow, the Borrowers can simply prepay their loans at their own convenience without any charges whatsoever and as many times as they wish.",
  "We have a large pool of investors who are looking to invest in individual projects approved by Grow. Once your loan project is listed on Gate, it gets funded within a few days.",
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
