import React from "react";
import CustomFlatIDTCard from "../CustomFlatIDTCard";
import TSDBanner from "../TSDBanner";
import grow from "../../resources/grow.svg";
import defer from "../../resources/defer.svg";
import leverage from "../../resources/leverage.svg";
import receive from "../../resources/recieve.svg";
import term from "../../resources/term.svg";
import ltv from "../../resources/LTV.svg";
import CustomFloatingBubble from "../CustomFloatingBubble";
import clsx from "clsx";
import CustomCurvedDiv from "../CustomCurvedDiv";

const WhyTakeLoan = ({ props }) => {
  return (
    <>
      <TSDBanner
        props={{
          ...props,
          gradientBackground:
            "linear-gradient(to bottom left, #382bc5, #ff3cac)",
          title: "Why take a loan?",
          subtitle: "Can’t I sell my crypto for cash?",
          detail:
            "You could, but you’d be giving up on your investment. And with no origination fees, it costs nothing to get started.",
        }}
      >
        <div className={props.cardsContainer}>
          <CustomFlatIDTCard
            img={grow}
            title="Borrow without letting go"
            detail="Selling your cryptocurrency means that you will miss out on the benefit of its potential growth."
          />
          <CustomFlatIDTCard
            img={defer}
            title="Defer your income or capital gains taxes"
            detail="Talk to your tax advisor about some potential benefits of accessing cash without cashing out."
          />
          <CustomFlatIDTCard
            img={leverage}
            title="Let your crypto go further"
            detail="Your current holdings provide you with financial power so you can buy more crypto at the right time."
          />
        </div>
      </TSDBanner>
      <div
        className={props.cardsContainer}
        style={{ backgroundColor: "white", zIndex: "-1" }}
      >
        <CustomFlatIDTCard
          flat
          img={receive}
          title="Interest rates from 1% APR"
          detail="It depends a bit on how you choose to pay, with CEL Tokens getting you the lowest rates. But no matter what, we’ll find the right rate for you."
        />
        <CustomFlatIDTCard
          flat
          img={term}
          title="Terms starting at 6 months"
          detail="Short, long or just right. Choose the term that suits you best, and extend or terminate your loan at any time. No fees. No penalties."
        />
        <CustomFlatIDTCard
          flat={true}
          img={ltv}
          title="Flexible loan-to-value options"
          detail="Now we’re getting serious. Fine tune your LTV in order to a) keep your interest rate low or b) minimize the required collateral."
        />
      </div>
      <CustomCurvedDiv color="white" index="-2" />
    </>
  );
};

export default WhyTakeLoan;
