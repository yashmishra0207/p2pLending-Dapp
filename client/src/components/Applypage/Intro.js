import { Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import CustomFloatingBubble from "../CustomFloatingBubble";
import coupleHighFive from "../../resources/couple_high_five.webp";
import CustomFlatIDTCard from "../CustomFlatIDTCard";
import start from "../../resources/start.svg";
import muchCash from "../../resources/much_cash.svg";
import application from "../../resources/application.svg";
import CustomCurvedDiv from "../CustomCurvedDiv";

const Intro = ({ classes }) => {
  return (
    <div className={classes.sectionPadding} style={{ paddingTop: 0 }}>
      <div
        className={clsx(classes.intro, classes.sectionPadding)}
        style={{ paddingBottom: 0 }}
      >
        <div className={classes.bubbleContainer}>
          <CustomFloatingBubble
            animationDelay="0.1s"
            props={clsx(classes.bubbleBig, classes.zIndex1)}
          />
          <CustomFloatingBubble
            animationDelay="0.5s"
            props={clsx(classes.bubbleMedium, classes.zIndex1)}
          />
          <CustomFloatingBubble
            animationDelay="0.9s"
            props={clsx(classes.bubbleSmall, classes.zIndex1)}
          />
        </div>
        <Typography
          className={clsx(classes.headerText, classes.zIndex3)}
          style={{ color: "white" }}
        >
          Borrow <span className={classes.gradientText}>cash</span>
          <br /> using your
          <br />
          <span className={classes.gradientText}>crypto</span>
        </Typography>

        <img
          className={clsx(classes.coupleHighFive, classes.zIndex2)}
          src={coupleHighFive}
          alt="couple high five"
        />

        <Typography
          className={clsx(classes.headerText, classes.zIndex3)}
          style={{ color: "white" }}
          gutterBottom
        >
          Interest rates start
          <br />
          <span
            className={clsx(classes.headerText)}
            style={{ fontWeight: "thin", fontFamily: "Nanum Myeongjo" }}
          >
            at just 1% APR
          </span>
        </Typography>

        <Typography
          variant="body1"
          className={classes.shortDetail}
          style={{ color: "white" }}
        >
          The best part? Your crypto stays yours. You get cash in hand at a
          super low rate without giving up on your investment.
        </Typography>
      </div>
      <CustomCurvedDiv color="rgb(254 59 172)" index="-1" />
      <div className={classes.cardsContainer}>
        <CustomFlatIDTCard
          img={muchCash}
          title="Tell us how much you need"
          detail="If you have the collateral, we have the cash. Borrow as little as $500."
        />
        <CustomFlatIDTCard
          img={application}
          title="Apply in minutes, zero paperwork"
          detail="You choose how you’d like your loan, and thanks to the power of crypto, we’re off to the races."
        />
        <CustomFlatIDTCard
          img={start}
          title="Get approved instantly"
          detail="There’s no credit check, no origination fee, and our automated process makes it insanely fast."
        />
      </div>
    </div>
  );
};

export default Intro;
