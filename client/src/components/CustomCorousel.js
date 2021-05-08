import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import certificate from "../resources/certificate-nbfc.png";
import overviewImg from "../resources/p2p-lending-overview-img.png";
import sliderImg1 from "../resources/slider-img1.png";
import CustomHr from "./CustomHr";
import WTButton from "./WTButton";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    heading: (
      <Typography variant="h3" style={{ color: "green" }}>
        RBI Registered NBFC-P2P
      </Typography>
    ),
    detail: (
      <>
        <Typography variant="h5" gutterBottom>
          Grow is a Reserve Bank of India (RBI) registered Non-Banking Financial
          Company - Peer to Peer Lending Platform (NBFC-P2P).
        </Typography>{" "}
        <br />{" "}
        <Typography variant="h5" style={{ color: "green" }}>
          NBFC-P2P Certificate of Registration (CoR) No. : N-12.00468
        </Typography>
      </>
    ),
    image: certificate,
  },
  {
    heading: (
      <Typography variant="h3">
        <span style={{ color: "dodgerblue" }}>Highly Trusted</span> Peer to Peer
        Lending Platform in India
      </Typography>
    ),
    detail: (
      <>
        <Typography variant="h5" gutterBottom>
          Get online personal loans at attractive interest rates through P2P
          Lending
        </Typography>
        <WTButton color="dodgerblue" text="Apply Now" url="/applyloan" />
      </>
    ),
    image: sliderImg1,
  },
  {
    heading: (
      <Typography variant="h3">
        <span style={{ color: "hotpink" }}>Smarter and Better</span> Investment
        Asset Class
      </Typography>
    ),
    detail: (
      <>
        <Typography variant="h5" gutterBottom>
          Opportunity to earn high returns by lending money online to verified
          borrowers
        </Typography>
        <WTButton color="hotpink" text="Invest Now" url="/invest" />
      </>
    ),
    image: overviewImg,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexGrow: 1,
    padding: "1rem",
    color: "#333",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "3rem",
      textAlign: "center",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  textContainer: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  img: {
    padding: "1rem",
    height: "100%",
    width: "auto",
  },
  imgContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      height: "460px",
      width: "50%",
    },
  },
}));

const CustomCorousel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {tutorialSteps.map((step, index) =>
        Math.abs(activeStep - index) <= 2 ? (
          <div className={classes.root}>
            <div className={classes.textContainer}>
              {step.heading}
              <CustomHr />
              {step.detail}
            </div>
            <div className={classes.imgContainer}>
              <img className={classes.img} src={step.image} alt={step.label} />
            </div>
          </div>
        ) : null
      )}
    </AutoPlaySwipeableViews>
  );
};

export default CustomCorousel;
