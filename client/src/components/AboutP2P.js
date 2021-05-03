import { makeStyles } from "@material-ui/core";
import React from "react";
import bannerImage from "../resources/loan.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  imgContainer: {
    width: "200px",
    height: "200px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

const AboutP2P = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.imgContainer}
        style={{ background: `url(${bannerImage})` }}
      ></div>
      <div>
        <p>
          Peer to Peer lending, also known as P2P Lending, is a financial
          innovation which connects verified borrowers seeking unsecured
          personal loans with investors looking to earn higher returns on their
          investments. Verified borrowers are listed on the P2P lending
          platform, Investors can see all the details about the borrowers before
          lending money to them. Investors have the option to lend small amounts
          to multiple borrowers to diversify their investments.
        </p>
        <p>
          Peer to Peer Lending is already a hugely successful model for
          alternate financing across the globe. In India, P2P Lending is gaining
          traction at a very fast pace and slowly becoming a very attractive
          investment option for investors. RBI has already taken a cognizance of
          this innovation and come up with regulations for the sector.
        </p>
      </div>
    </div>
  );
};

export default AboutP2P;
