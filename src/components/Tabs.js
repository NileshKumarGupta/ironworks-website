import { Link, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";

import "./Tabs.css";

import SatianuLogo from "../assets/saitanuLogo.png";

const CompanyInfo = ({ image, name, url }) => {
  return (
    <div>
      <img src={image} alt="" className="cardImage"></img>
      <Typography variant="h6" style={{ color: "var(--darkBlue)" }}>
        <Link href={url} target="blank">
          {name}
        </Link>
      </Typography>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <div style={{ margin: "4em auto 0 auto", color: "#818387" }}>
      <Typography variant="h2">Coming Soon</Typography>
    </div>
  );
};

const Tabs = ({ visible }) => {
  const [currTab, setCurrTab] = useState(2);
  const tabDiv = useRef();

  return (
    <div ref={tabDiv}>
      <div className={`tabHeaders ${visible ? "slideUpHeader" : ""}`}>
        <div
          className={`tabHead ${currTab === 0 ? "activeHead" : ""}`}
          onClick={() => setCurrTab(0)}
        >
          Media Testing
        </div>
        <div
          className={`tabHead ${currTab === 1 ? "activeHead" : ""}`}
          onClick={() => setCurrTab(1)}
        >
          UI/UX Testing
        </div>
        <div
          className={`tabHead ${currTab === 2 ? "activeHead" : ""}`}
          onClick={() => setCurrTab(2)}
        >
          Product Testing
        </div>
      </div>
      <div className={`tabContents`}>
        <div
          className={`tabItem ${
            visible && currTab === 0 ? "activeContent slideUpSmall" : ""
          }`}
        >
          <ComingSoon />
        </div>
        <div
          className={`tabItem ${
            visible && currTab === 1 ? "activeContent slideUpSmall" : ""
          }`}
        >
          <ComingSoon />
        </div>
        <div
          className={`tabItem ${
            visible && currTab === 2 ? "activeContent slideUpSmall" : ""
          }`}
        >
          <CompanyInfo
            image={SatianuLogo}
            name="Satianu"
            url="https://www.satianu.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
