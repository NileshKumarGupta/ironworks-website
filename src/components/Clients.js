import React, { useRef } from "react";
import { makeStyles, Typography } from "@material-ui/core";

import Tabs from "./Tabs";
import useVisibility from "../hooks/useVisibilty";

const useStyles = makeStyles({
  clientsDiv: {
    paddingBottom: "8em",
    width: "80%",
    margin: "auto",
    color: "#818387",
  },
  hr: {
    borderColor: "#cfd6de",
    borderWidth: "1px",
    width: "80%",
  },
});

const Clients = () => {
  const classes = useStyles();
  const clientDiv = useRef();

  const visible = useVisibility(clientDiv);

  return (
    <div>
      <hr className={classes.hr} id="clients"></hr>
      <div className={classes.clientsDiv} ref={clientDiv}>
        <Typography
          variant="h4"
          style={{
            margin: "4em 0 3em 0",
            textAlign: "center",
            color: "#818387",
          }}
          className={visible ? "slideUpHeader" : ""}
        >
          OUR CLIENTS
        </Typography>
        <Tabs visible />
      </div>
    </div>
  );
};

export default Clients;
