import React from "react";
import AboutP2P from "./AboutP2P";
import ApplyAndInvest from "./ApplyAndInvest";
import Banner from "../Banner";
import CustomCorousel from "../CustomCorousel";
import HowItWorks from "./HowItWorks";
import CustomSquedDiv from "../CustomSquedDiv";
import WhyInvest from "./WhyInvest";
import WhyBorrow from "./WhyBorrow";
import Footer from "../Footer";
import AboutWebsite from "./AboutWebsite";

const Homepage = () => {
  return (
    <>
      <CustomCorousel />
      <Banner color="#222" heading="Get Started" content={<ApplyAndInvest />} />
      <Banner heading="What is Peer to Peer Lending?" content={<AboutP2P />} />
      <Banner color="#222" heading="How It Works" content={<HowItWorks />} />
      <CustomSquedDiv color1="white" color2="#222" direction="right" />
      <Banner heading="Why Invest at Grow" content={<WhyInvest />} />
      <Banner
        color="#222"
        heading="Why Borrow at Grow"
        content={<WhyBorrow />}
      />
      <Banner heading="About Website" content={<AboutWebsite />} />
      <Footer />
    </>
  );
};

export default Homepage;
