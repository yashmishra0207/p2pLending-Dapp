import React from "react";
import AboutP2P from "./AboutP2P";
import ApplyAndInvest from "./ApplyAndInvest";
import Banner from "../Banner";
import CustomCorousel from "../CustomCorousel";
import HowItWorks from "./HowItWorks";

const Homepage = () => {
  return (
    <>
      <CustomCorousel />
      <ApplyAndInvest />
      <Banner heading="What is Peer to Peer Lending?" content={<AboutP2P />} />
      <Banner color="#0f2d53" heading="How It Works" content={<HowItWorks />} />
    </>
  );
};

export default Homepage;
