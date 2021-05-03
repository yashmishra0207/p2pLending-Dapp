import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CustomStepper from "../CustomStepper";

const useStyles = makeStyles({
  button: {
    width: "150px",
    border: "1px solid transparent",
    color: "white",
    "&:hover": {
      backgroundColor: "white !important",
      borderColor: "black",
      color: "black",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  heading: {
    color: "white",
    textAlign: "center",
    margin: "15px 0 25px 0",
    wordSpacing: "5px",
  },
});

function getInvestorSteps() {
  return [
    "Create Investor Account in Minutes",
    "Review Preverified Loan Projects",
    "Invest In P2P Loans Of Your Preference",
    "Transfer Funds And Recieve Payments From Next Month",
    "Build Portfolio And Grow Your Money",
  ];
}

function getBorrowerSteps() {
  return [
    "Create Borrower Account",
    "Loan Assesment by Grow",
    "Make Loan Live on grow.com",
    "Get Funding Commitments from Investors",
    "Loan Disbursal and Repayments",
  ];
}

function getInvestorStepContent(step) {
  switch (step) {
    case 0:
      return `Post registration, open an investor account by filling a simple online form and uploading your Pan Card copy and address proof to adhere to KYC criteria as set by the RBI. Your wallet will be credited with the notional money of Rs. 50,000 after registration.`;
    case 1:
      return "Once registered you can review different P2P loans requested by borrowers. Grow has already assessed these loans using its proprietary credit score model and recommends interest rate and assigns a risk category to each of the loans to make your investment decision simple.";
    case 2:
      return `Select and fund the loan projects as per your preference using money available in your wallet. You can start investing from just Rs. 5,000, however, you can fund maximum up to 20% of loan amount requested by Borrower. You will have to recharge your wallet for investments after Rs. 50,000.`;
    case 3:
      return "Once all legal formalities have been completed, investors need to transfer funds to the Unique Escrow account assigned to each investor for disbursal. You will start receiving monthly repayments in your bank account from next month onwards.";
    case 4:
      return 'Invest small amounts in multiple loans available on our portal as per your risk appetite and build a diversified portfolio to earn high returns on your investments. Our user-friendly and easy to use "My Account" section gives you complete control and transparent view of all your investments.';
    default:
      return "Unknown step";
  }
}

function getBorrowerStepContent(step) {
  switch (step) {
    case 0:
      return `Post registration, open the borrower account by filling a simple online form and uploading all the relevant documents. Please remember, the more information and documents you provide, better is the chance you stand to get lower interest rates.`;
    case 1:
      return "Grow considers more than 50+ parameters like education background, employment stability, debt-income ratio etc. apart from CIBIL to assess your true credit profile and then recommends interest rate and risk category for the loan.";
    case 2:
      return `After your loan request has been assessed by Grow, you should make your loan live on grow.com through My Account section by setting interest rate and expiry date. Please note that you can increase the interest rate of your loan to make the loan more attractive to investors.`;
    case 3:
      return "Once your loan is live on our portal, it can be viewed by all the investors registered on our portal. Soon, investors spread across India will start showing investment commitment in your loan project which can be easily monitored by you through my account section.";
    case 4:
      return 'Invest small amounts in multiple loans available on our portal as per your risk appetite and build a diversified portfolio to earn high returns on your investments. Our user-friendly and easy to use "My Account" section gives you complete control and transparent view of all your investments.Once all legal formalities have been completed, Individual investors will transfer money to Escrow account and from Escrow Account money will be transferred to your bank account. Post which you need to repay the loan as per the terms mentioned in the agreement. You may also choose to prepay the loan without any penalty.';
    default:
      return "Unknown step";
  }
}

const HowItWorks = () => {
  const classes = useStyles();
  const [type, setType] = useState(0);

  return (
    <>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => setType(0)}
          className={classes.button}
          style={{ backgroundColor: "dodgerblue" }}
        >
          Borrower
        </Button>
        <Button
          onClick={() => setType(1)}
          className={classes.button}
          style={{ backgroundColor: "hotpink", marginLeft: "20px" }}
        >
          Investor
        </Button>
      </div>
      {type == 0 ? (
        <CustomStepper
          heading={
            <Typography variant="h5" className={classes.heading}>
              Get <span style={{ color: "dodgerblue" }}>P2P Loans</span> at
              Attractive Interest Rates on{" "}
              <span style={{ color: "dodgerblue" }}>
                Peer to Peer Lending Platform
              </span>{" "}
              without any Prepayment Charges
            </Typography>
          }
          color="dodgerblue"
          getSteps={getBorrowerSteps}
          getStepContent={getBorrowerStepContent}
        />
      ) : (
        type == 1 && (
          <CustomStepper
            heading={
              <Typography
                variant="h5"
                component="h1"
                className={classes.heading}
              >
                {" "}
                Peer to Peer Lending -{" "}
                <span style={{ color: "hotpink" }}>
                  Hassle Free and Smarter Way
                </span>{" "}
                for Investors to Earn High Returns
              </Typography>
            }
            color="hotpink"
            getSteps={getInvestorSteps}
            getStepContent={getInvestorStepContent}
          />
        )
      )}
    </>
  );
};
export default HowItWorks;
