import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ApplyAndInvestCard from "./ApplyAndInvestCard";
import LoanIcon from "../../resources/loan.svg";
import ReturnsIcon from "../../resources/returns.svg";

const useStyles = makeStyles({
  applyInvestContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-evenly",
  },
});

const ApplyAndInvest = () => {
  const classes = useStyles();

  return (
    <div className={classes.applyInvestContainer}>
      <ApplyAndInvestCard
        color="dodgerblue"
        icon={LoanIcon}
        heading="Personal Loan (P2P Loan)"
        detail="at Interest Rates Starting from 12 %"
        buttonUrl="/applyloan"
        buttonText="Apply Now"
        countDetail="Total Loan Amount Applied by Borrowers:"
        count="₹ 9,41,38,64,519.99"
      />
      <ApplyAndInvestCard
        color="hotpink"
        icon={ReturnsIcon}
        heading="High Returns for Investors"
        detail="Earn up to 30 % returns"
        buttonUrl="/invest"
        buttonText="Invest Now"
        countDetail="Total Investment Commitment from Investors:"
        count="₹ 1,67,69,40,988.80"
      />
    </div>
  );
};
export default ApplyAndInvest;
