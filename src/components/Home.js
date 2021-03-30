import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import backgroundImage from "../assets/homeBackground.jpg";

const useStyles = makeStyles({
  containerDiv: {
    width: "100%",
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    height: "80vh",
    backgroundPosition: "center",
  },
  homeDiv: {
    backgroundColor: "rgba(20, 20, 20, 0.5)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //eslint-disable-next-line
    ["@media (max-width:950px)"]: {
      fontSize: "10px",
      width: "80%",
      margin: "auto",
    },
  },
  mainText: {
    color: "white",
  },
  hr: {
    borderWidth: "3px",
    margin: "2.5em 0",
  },
  subtext: {
    textAlign: "center",
  },
  actionButton: {
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  demoButton: {
    padding: "5px 10px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "white",
    textTransform: "none",
  },
  bannerText: {
    //eslint-disable-next-line
    ["@media (max-width: 600px) and (min-width: 500px)"]: {
      fontSize: "6em",
    },
    //eslint-disable-next-line
    ["@media (max-width: 500px) and (min-width: 400px)"]: {
      fontSize: "5em",
    },
    //eslint-disable-next-line
    ["@media (max-width: 400px)"]: {
      fontSize: "4.5em",
    },
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerDiv} id="home">
      <div className={classes.homeDiv}>
        <div className={classes.mainText}>
          <hr className={classes.hr} />
          <Typography
            variant="h1"
            style={{ textAlign: "center" }}
            className={classes.bannerText}
          >
            IRONWORKS INSIGHTS
          </Typography>
          <hr className={classes.hr} />
          <Typography variant="h5" className={classes.subtext}>
            Tapping into{" "}
            <b>
              <i>subconscious</i>
            </b>{" "}
            of the customer
          </Typography>
        </div>
        <div className={classes.actionButton}>
          <Button className={classes.demoButton}>
            <Typography>
              <a
                style={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "none" },
                  color: "white",
                }}
                href="#demo"
              >
                <b>Click Here</b> to Watch a Demo
              </a>
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
