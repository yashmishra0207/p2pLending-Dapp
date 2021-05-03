import { makeStyles } from "@material-ui/core";
import React from "react";
import bannerImage from "../../resources/what_is_p2pLending.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  imgContainer: {
    width: "400px",
    height: "200px",
    border: "20px solid transparent",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "200px",
    },
  },
}));

const AboutP2P = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.imgContainer}
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
      <div style={{ flex: 1 }}>
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
