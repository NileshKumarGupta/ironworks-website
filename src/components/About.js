import { makeStyles, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import useVisibility from "../hooks/useVisibilty";

const useStyles = makeStyles({
  aboutDiv: {
    borderTop: "solid 10px var(--darkBlue)",
    paddingBottom: "8em",
    textAlign: "center",
    color: "#818387",
  },
  aboutContent: {
    width: "60%",
    margin: "auto",
    fontSize: "1.3em",
    padding: "20px 0",
  },
  hr: {
    borderColor: "#cfd6de",
    borderWidth: "1px",
    width: "80%",
    margin: "30px auto 0 auto",
  },
});

const About = () => {
  const classes = useStyles();
  const aboutDivRef = useRef();

  const visible = useVisibility(aboutDivRef);

  return (
    <div className={classes.aboutDiv} id="about" ref={aboutDivRef}>
      <hr className={classes.hr}></hr>
      <Typography
        variant="h4"
        className={`${visible ? "slideUpHeader" : ""}`}
        style={{ margin: "4em 0 2em 0" }}
      >
        ABOUT US
      </Typography>
      <div className={`${classes.aboutContent} ${visible ? "slideUp" : ""}`}>
        <div style={{ padding: "0 10px" }}>
          <Typography
            style={{
              margin: "1.3em 0px 2.5em 0px",
              fontSize: "1.2rem",
              textAlign: "left",
            }}
          >
            Tapping into the{" "}
            <span style={{ color: "#004896", fontWeight: "600" }}>
              subconscious
            </span>{" "}
            of consumers using non invasive brain imaging tools like EEG
          </Typography>
          <Typography
            style={{
              textAlign: "left",
              lineHeight: "1.7rem",
              fontSize: "1.2rem",
            }}
          >
            Ironwork Insights applies neuroscience tools and insights to help
            business to better understand unconscious and conscious responses.
            By using state of the art technology, we provide the best practice
            for gaining insight into consumers’ minds and behaviors.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
