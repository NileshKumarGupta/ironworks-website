import React, { useState } from "react";
import { makeStyles, TextField, Typography, Button } from "@material-ui/core";

import { db } from "../firebase";

const useStyles = makeStyles({
  hr: {
    borderColor: "#cfd6de",
    borderWidth: "1px",
    width: "80%",
  },
  submitButton: {
    display: "block",
    margin: "1.5em auto",
    backgroundColor: "var(--grayishBlack)",
    color: "white",
    textTransform: "none",
    fontSize: "1em",
    padding: "1em 3em",
    "&:hover": {
      backgroundColor: "rgba(42, 47, 53, 0.7)",
    },
  },
  iform: {
    width: "60%",
    margin: "auto",
    //eslint-disable-next-line
    ["@media (max-width: 800px)"]: {
      width: "80%",
    },
    //eslint-disable-next-line
    ["@media (max-width: 600px)"]: {
      width: "90%",
    },
  },
});

export default function Subscribe() {
  const classes = useStyles();

  const [email, setEmail] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    db.collection("subscribe")
      .add({
        email,
      })
      .then(() => {
        alert("Successfully Subscribed");
        setEmail("");
      })
      .catch(() => alert("Some error occurd, Please try again"));
  };

  return (
    <div style={{ paddingBottom: "8em" }}>
      <hr className={classes.hr} id="subscribe"></hr>
      <div style={{ width: "80%", margin: "auto" }}>
        <Typography
          variant="h4"
          style={{
            margin: "4em 0 3em 0",
            textAlign: "center",
            color: "#818387",
          }}
        >
          SUBSCRIBE
        </Typography>
        <form className={classes.iform} onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            label="Email"
            style={{ textAlign: "center", width: "100%" }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          ></TextField>
          <Button className={classes.submitButton} type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
