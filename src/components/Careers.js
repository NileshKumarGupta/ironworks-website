import { TextField, Typography, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import { db, storage } from "../firebase";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    margin: "auto",
    "&>*": {
      margin: "1em auto",
    },
    //eslint-disable-next-line
    ["@media (max-width:1000px) and (min-width: 800px)"]: {
      width: "60%",
    },
    //eslint-disable-next-line
    ["@media (max-width:800px) and (min-width: 600px)"]: {
      width: "80%",
    },
    //eslint-disable-next-line
    ["@media (max-width:600px) and (min-width: 400px)"]: {
      width: "90%",
    },
    //eslint-disable-next-line
    ["@media (max-width:400px)"]: {
      width: "100%",
    },
  },
  textfield: {
    width: "80%",
  },
  submitButton: {
    backgroundColor: "var(--grayishBlack)",
    color: "white",
    "&:hover": {
      backgroundColor: "var(--grayishBlack)",
    },
    padding: "1em 3em",
  },
});

const Careers = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);

  const classes = useStyles();

  const FormSubmit = (event) => {
    event.preventDefault();

    let storagePromise = null;
    if (resume) {
      const storageRef = storage.ref();
      const resumeRef = storageRef.child(`${name}_Resume.pdf`);

      storagePromise = resumeRef.put(resume);
    }

    let dbPromise = db.collection("careers").add({
      name,
      email,
      phone,
      resume: `${name}_Resume.pdf`,
    });

    Promise.all([storagePromise, dbPromise])
      .then(() => {
        alert("Application Successful");
        setName("");
        setEmail("");
        setPhone("");
        setResume(null);
      })
      .catch(() => alert("Some problem occured, please try again"));
  };

  return (
    <div style={{ textAlign: "center", margin: "4em auto", width: "80%" }}>
      <Typography variant="h1" style={{ marginBottom: "1em" }}>
        Careers
      </Typography>
      <Typography variant="h5" style={{ marginBottom: "1em" }}>
        Interested in Joining Us? Fill the form below and we will get in contact
        with you.
      </Typography>
      <form onSubmit={FormSubmit} className={classes.form}>
        <TextField
          variant="outlined"
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className={classes.textfield}
        />
        <TextField
          variant="outlined"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={classes.textfield}
          type="email"
        />
        <TextField
          variant="outlined"
          label="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          className={classes.textfield}
          type="tel"
        />
        <Button
          variant="contained"
          component="label"
          style={{ marginTop: "3em" }}
          value={resume}
          onChange={(event) => setResume(event.target.files[0])}
        >
          Upload Resume
          <input accept="application/pdf" type="file" hidden />
        </Button>
        <Typography variant="subtitle2">
          {resume != null ? `${resume.name}` : ""}
        </Typography>
        <Button className={classes.submitButton} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Careers;
