import { Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";

import "./Tabs.css";

import testImage from "../assets/testImage.jpg";

const CompanyInfo = () => {
  return (
    <div>
      <img src={testImage} alt="" className="cardImage"></img>
      <Typography variant="h6" style={{ color: "var(--darkBlue)" }}>
        Company Name
      </Typography>
    </div>
  );
};

const Tabs = ({ visible }) => {
  const [currTab, setCurrTab] = useState(0);
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
          <CompanyInfo />
          <CompanyInfo />
          <CompanyInfo />
          <CompanyInfo />
        </div>
        <div
          className={`tabItem ${
            visible && currTab === 1 ? "activeContent slideUpSmall" : ""
          }`}
        >
          <CompanyInfo />
          <CompanyInfo />
          <CompanyInfo />
          <CompanyInfo />
        </div>
        <div
          className={`tabItem ${
            visible && currTab === 2 ? "activeContent slideUpSmall" : ""
          }`}
        >
          <CompanyInfo />
          <CompanyInfo />
          <CompanyInfo />
          <CompanyInfo />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
