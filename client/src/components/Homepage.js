import React from "react";
import AboutP2P from "./AboutP2P";
import ApplyAndInvest from "./ApplyAndInvest";
import Banner from "./Banner";
import CustomCorousel from "./CustomCorousel";

const Homepage = () => {
  return (
    <>
      <CustomCorousel />
      <ApplyAndInvest />
      <Banner heading="What is Peer to Peer Lending?" content={<AboutP2P />} />
    </>
  );
};

export default Homepage;
