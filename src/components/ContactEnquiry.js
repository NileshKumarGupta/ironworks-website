import React, { useRef, useState } from "react";
import {
  Button,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import useVisibility from "../hooks/useVisibilty";
import { db } from "../firebase";

const useStyles = makeStyles({
  hr: {
    borderColor: "#cfd6de",
    borderWidth: "1px",
    width: "100%",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 0.1fr 1fr",
    justifyItems: "center",
    alignItems: "center",
    margin: "8em auto 0 auto",
    color: "#818387",
    padding: "0 2em",
    //eslint-disable-next-line
    ["@media (max-width:800px)"]: {
      display: "flex",
      flexDirection: "column-reverse",
      margin: "2em auto",
    },
  },
  vr: {
    height: "100%",
    border: "1px solid #818387",
    //eslint-disable-next-line
    ["@media (max-width:800px)"]: {
      display: "none",
    },
  },
  text: {
    padding: "5em 1.5em",
    textAlign: "center",
    //eslint-disable-next-line
    ["@media (max-width:800px)"]: {
      padding: "4em 0",
    },
  },
  iffield: {
    margin: "0.3em 0.3em",
  },
  fw: {
    width: "90%",
  },
  submitButton: {
    margin: "1.5em 0",
    backgroundColor: "var(--grayishBlack)",
    color: "white",
    textTransform: "none",
    fontSize: "1.2em",
    padding: "1em 4em",
    "&:hover": {
      backgroundColor: "rgba(42, 47, 53, 0.7)",
    },
  },
  contactText: {
    margin: "4em 0 1em 0",
    textAlign: "center",
    color: "#818387",
    //eslint-disable-next-line
    ["@media (max-width:800px)"]: { marginBottom: "0em" },
  },
  nameForm: {
    display: "flex",
    width: "90%",
    margin: "auto",
    justifyContent: "space-between",
    //eslint-disable-next-line
    ["@media (max-width: 700px)"]: {
      flexDirection: "column",
    },
  },
  contactDiv: {
    paddingBottom: "8em",
    width: "80%",
    margin: "auto",
    //eslint-disable-next-line
    ["@media (max-width:800px)"]: { paddingBottom: "4em" },
  },
});

export default function ContactEnquiry() {
  const classes = useStyles();

  const contactDiv = useRef();

  const visible = useVisibility(contactDiv);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [company, setcompany] = useState("");
  const [position, setposition] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    db.collection("enquiry")
      .add({
        firstName,
        lastName,
        phone,
        email,
        company,
        position,
      })
      .then(() => {
        alert("We will contact you soon!");
        setfirstName("");
        setlastname("");
        setphone("");
        setemail("");
        setcompany("");
        setposition("");
      })
      .catch(() => alert("Some error occured, please try again!"));
  };

  return (
    <div id="contact" className={classes.contactDiv}>
      <div ref={contactDiv}>
        <hr className={classes.hr}></hr>
        <Typography
          variant="h4"
          className={`${classes.contactText} ${visible ? "slideUpHeader" : ""}`}
        >
          CONTACT
        </Typography>
        <div className={`${classes.content} ${visible ? "slideUpSmall" : ""}`}>
          <div className={classes.text}>
            <Typography variant="h4" style={{ marginBottom: "2em" }}>
              Connect With Us
            </Typography>
            <Typography style={{ marginBottom: "1em" }}>
              Office block Sea breeze CHS, Sector 16, Nerul, Navi Mumbai.
              Pincode - 400706
            </Typography>
            <Typography style={{ marginBottom: "0.5em" }}>
              apoorvanand9@gmail.com / nikhilgarg.bits@gmail.com
            </Typography>

            <Typography style={{ marginBottom: "0.5em" }}>
              +91-8698593945 /91304 68964
            </Typography>
            <IconButton></IconButton>
          </div>
          <div className={classes.vr}></div>
          <div className={classes.text}>
            <Typography variant="h4" style={{ marginBottom: "1.5em" }}>
              Send an Enquiry
            </Typography>
            <form
              style={{ width: "100%", margin: "auto" }}
              onSubmit={handleFormSubmit}
            >
              <div className={classes.nameForm}>
                <TextField
                  variant="outlined"
                  label="First Name"
                  value={firstName}
                  onChange={(event) => setfirstName(event.target.value)}
                  required
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Last Name"
                  value={lastName}
                  onChange={(event) => setlastname(event.target.value)}
                ></TextField>
              </div>
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                className={`${classes.iffield} ${classes.fw}`}
                required
                value={email}
                onChange={(event) => setemail(event.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="Phone"
                type="phone"
                className={`${classes.iffield} ${classes.fw}`}
                value={phone}
                onChange={(event) => setphone(event.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="Company"
                className={`${classes.iffield} ${classes.fw}`}
                value={company}
                onChange={(event) => setcompany(event.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="Position"
                className={`${classes.iffield} ${classes.fw}`}
                value={position}
                onChange={(event) => setposition(event.target.value)}
              ></TextField>
              <Button className={classes.submitButton} type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
