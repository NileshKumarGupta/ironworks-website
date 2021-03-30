import React, { useRef } from "react";
import { makeStyles, Typography } from "@material-ui/core";

import MediaLogo from "../assets/media.png";
import UiuxLogo from "../assets/ui-ux.png";
import ProductLogo from "../assets/product.png";
import useVisibility from "../hooks/useVisibilty";

const useStyles = makeStyles({
  hr: {
    borderColor: "#cfd6de",
    borderWidth: "1px",
    width: "80%",
  },
  servicesDiv: {
    color: "#818387",
    width: "80%",
    height: "75%",
    margin: "0.8em auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  servicesContent: {
    width: "90%",
    margin: "auto",
    height: "70%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridGap: "3em",
  },
  serviceText: {
    fontSize: "1.1rem",
    lineHeight: "1.5rem",
    margin: "2.5em 0 0 0",
  },
  image: {
    width: "100%",
    marginTop: "2em",
    //eslint-disable-next-line
    ["@media (max-width: 650px) and (min-width: 500px)"]: {
      width: "70%",
    },
    //eslint-disable-next-line
    ["@media (max-width: 500px) and (min-width: 450px)"]: {
      width: "90%",
    },
  },
});

const Services = () => {
  const classes = useStyles();

  const serviceRef = useRef();

  const visible = useVisibility(serviceRef);

  return (
    <div style={{ paddingBottom: "8em" }} id="services">
      <div ref={serviceRef}>
        <hr className={classes.hr}></hr>
        <Typography
          variant="h4"
          style={{
            margin: "4em 0 2em 0",
            textAlign: "center",
            color: "#818387",
          }}
          className={visible ? "slideUpHeader" : ""}
        >
          OUR SERVICES
        </Typography>
        <div className={`${classes.servicesDiv} ${visible ? "slideUp" : ""}`}>
          <div className={classes.servicesContent}>
            <div className={classes.service}>
              <img
                src={MediaLogo}
                className={classes.image}
                alt="Media Testing"
              ></img>
              <Typography className={classes.serviceText}>
                Testing advertisments/creative to get quantative feedback on
                metrics related to attention, emotion and cognition. Helps in
                giving diagnostic feedback on content and predict performancne
                metrics across different demographics.
              </Typography>
            </div>
            <div className={classes.service}>
              <img
                src={UiuxLogo}
                className={classes.image}
                alt="UI/UX Testing"
              ></img>
              <Typography className={classes.serviceText}>
                Testing advertisments/creative to get quantative feedback on
                metrics related to attention, emotion and cognition. Helps in
                giving diagnostic feedback on content and predict performancne
                metrics across different demographics.
              </Typography>
            </div>
            <div className={classes.service}>
              <img
                src={ProductLogo}
                className={classes.image}
                alt="Product Testing"
              ></img>
              <Typography className={classes.serviceText}>
                Testing advertisments/creative to get quantative feedback on
                metrics related to attention, emotion and cognition. Helps in
                giving diagnostic feedback on content and predict performancne
                metrics across different demographics.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
