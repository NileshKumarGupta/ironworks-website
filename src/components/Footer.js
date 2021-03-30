import React from "react";
import { Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";

const Footer = () => {
  return (
    <div
      style={{
        paddingTop: "4em",
        paddingBottom: "1em",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CopyrightIcon />
      <Typography style={{ marginLeft: "1em" }}>
        2020 by Ironwoks Insights
      </Typography>
    </div>
  );
};

export default Footer;
