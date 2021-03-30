import { makeStyles, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import ReactPlayer from "react-player";
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
    margin: "0.8em auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  videoDiv: {
    width: "72%",
    margin: "auto",
    textAlign: "center",
    //eslint-disable-next-line
    ["@media (max-width: 550px)"]: {
      width: "90%",
    },
  },
});

const DemoVideo = () => {
  const classes = useStyles();

  const demoRef = useRef();

  const visible = useVisibility(demoRef);

  return (
    <div style={{ paddingBottom: "8em" }} id="demo">
      <div ref={demoRef}>
        <hr className={classes.hr}></hr>
        <Typography
          variant="h4"
          style={{
            margin: "4em 0 3em 0",
            textAlign: "center",
            color: "#818387",
          }}
          className={visible ? "slideUpHeader" : ""}
        >
          DEMO VIDEO
        </Typography>
        <div className={`${classes.videoDiv} ${visible ? "slideUpSmall" : ""}`}>
          <ReactPlayer
            url="demoVideo.mp4"
            className="react-player"
            width="100%"
            height="100%"
            controls
            pip
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
