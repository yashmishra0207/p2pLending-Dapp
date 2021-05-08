import { Typography } from "@material-ui/core";
import React from "react";
import reactIcon from "../../resources/react.svg";
import solidityIcon from "../../resources/solidity.png";
import truffleIcon from "../../resources/truffle.png";
import metamaskIcon from "../../resources/metamask.png";
import githubIcon from "../../resources/github.svg";
import AboutWebsiteCard from "../AboutWebsiteCard";

const techstack = [
  {
    weblink: "https://reactjs.org/",
    icon: reactIcon,
    title: (
      <Typography color="textSecondary" variant="subtitle1">
        <Typography variant="h6" style={{ color: "#60dafb" }}>
          ReactJs
        </Typography>{" "}
        Fontend
      </Typography>
    ),
  },
  {
    weblink: "https://docs.soliditylang.org/en/v0.8.4/",
    icon: solidityIcon,
    title: (
      <Typography color="textSecondary" variant="subtitle1">
        <Typography variant="h6" style={{ color: "#63698e" }}>
          Solidity
        </Typography>{" "}
        Implementing smart contract
      </Typography>
    ),
  },
  {
    weblink: "https://www.trufflesuite.com/",
    icon: truffleIcon,
    title: (
      <Typography color="textSecondary" variant="subtitle1">
        <Typography variant="h6" style={{ color: "saddlebrown" }}>
          Truffle
        </Typography>{" "}
        Deploying contract and creating a local blockchain server
      </Typography>
    ),
  },
  {
    weblink: "https://metamask.io/",
    icon: metamaskIcon,
    title: (
      <Typography color="textSecondary" variant="subtitle1">
        <Typography variant="h6" style={{ color: "#f6851b" }}>
          Metamask
        </Typography>{" "}
        Crypto wallet
      </Typography>
    ),
  },
  {
    weblink: "https://github.com/",
    icon: githubIcon,
    title: (
      <Typography color="textSecondary" variant="subtitle1">
        <Typography variant="h6" style={{ color: "#e83da3" }}>
          Github
        </Typography>{" "}
        Version control and collaboration
      </Typography>
    ),
  },
];

const AboutWebsite = () => {
  return (
    <>
      <Typography gutterBottom>
        This website is created as a part of our final year major project. This
        is the user interface for P2P Lending platform. Following techstack is
        being used for its development and management -
      </Typography>
      {techstack.map((tech) => (
        <AboutWebsiteCard
          icon={tech.icon}
          title={tech.title}
          weblink={tech.weblink}
        />
      ))}
    </>
  );
};

export default AboutWebsite;
