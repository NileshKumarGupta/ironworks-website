import React from "react";
import { Container, makeStyles, Paper } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import DemoVideo from "./DemoVideo";
import Client from "./Clients";
import ContactEnquiry from "./ContactEnquiry";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Careers from "./Careers";

import "./App.css";

const useStyles = makeStyles({
  container: {
    marginTop: "-10vh",
  },
  hr: {
    borderColor: "var(--darkBlue)",
    borderWidth: "1px",
    width: "90%",
    margin: " 5vh auto 0vh auto",
  },
});

/*
Sections of website

  Navbar
  HomePage
  About Us
  Services
  Demo Video
  OurClients
  Enquiry + Contact

  Careers

enable caching

convert images to better formats
media queries

*/

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Container className={`lgWidth ${classes.container}`}>
            <Paper elevation={15} style={{ backgroundColor: "#E6E6E6" }}>
              <About />
              <Services />
              <DemoVideo />
              <Client />
              <ContactEnquiry />
              <Subscribe />
            </Paper>
          </Container>
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
