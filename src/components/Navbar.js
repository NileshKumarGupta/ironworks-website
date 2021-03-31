import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Link,
  Menu,
  Button,
  MenuItem,
} from "@material-ui/core";
import { Link as PageLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/logoWhite.svg";

const useStyles = makeStyles(() => ({
  logo: {
    color: "white",
  },
  hg8: {
    height: "8vh",
  },
  hg10: {
    height: "10vh",
  },
  hg9: {
    height: "9vh",
  },
  hg12: {
    height: "12vh",
  },
  appbar: {
    backgroundColor: "var(--grayishBlack)",
    padding: "0px 24px",
  },
  shrink: {
    animationDuration: "0.35s",
    animationName: "slideTop",
  },
  toolbar: {
    width: "100%",
    margin: "auto",
    padding: "0",
    transform: "scaleX(0.9)",
  },
  linkBar: {
    padding: "5px",
    margin: "0 0 0 auto",
    //eslint-disable-next-line
    ["@media (max-width: 700px)"]: {
      display: "none",
    },
  },
  links: {
    color: "white",
    margin: "0 10px",
    "&:hover": {
      textDecoration: "none",
    },
    textDecoration: "none",
  },
  menuButton: {
    color: "white",
    marginLeft: "auto",
    display: "none",
    //eslint-disable-next-line
    ["@media (max-width: 700px)"]: {
      display: "block",
    },
  },
  menuIcon: {
    fontSize: "2.5em",
  },
  menuLinks: {
    padding: "0.4em 1.5em",
    color: "var(--grayishBlack)",
    textTransform: "none",
    textDecoration: "none",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [trigger, setTrigger] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
      setTrigger(true);
    else setTrigger(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      className={`${classes.appbar} ${
        trigger ? `${classes.hg9} ${classes.shrink}` : `${classes.hg12}`
      }`}
      position="sticky"
    >
      <Toolbar variant="dense" className={`lgWidth ${classes.toolbar}`}>
        <Link href="#home">
          <object
            type="image/svg+xml"
            data={logo}
            className={`${trigger ? `${classes.hg8}` : `${classes.hg10}`} ${
              classes.logo
            }`}
            style={{ cursor: "pointer" }}
          >
            IronWorks Logo
          </object>
        </Link>
        <div
          className={classes.linkBar}
          style={{ fontSize: `${trigger ? "1.1em" : "1.3em"}` }}
        >
          <Link className={classes.links} href="#home">
            Home
          </Link>
          <Link className={classes.links} href="#about">
            About Us
          </Link>
          <Link className={classes.links} href="#services">
            Services
          </Link>
          <Link className={classes.links} href="#demo">
            Demo
          </Link>
          <Link className={classes.links} href="#clients">
            Clients
          </Link>
          <Link className={classes.links} href="#contact">
            Contact
          </Link>
          <PageLink className={classes.links} to="/careers">
            Careers
          </PageLink>
        </div>
        <Button
          className={classes.menuButton}
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <MenuIcon className={classes.menuIcon} />
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          keepMounted
          onClose={handleMenuClose}
          className={classes.menuLinkBar}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link className={classes.menuLinks} href="#home">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link className={classes.menuLinks} href="#about">
              About Us
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link className={classes.menuLinks} href="#services">
              Services
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link className={classes.menuLinks} href="#demo">
              Demo
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link className={classes.menuLinks} href="#clients">
              Clients
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link className={classes.menuLinks} href="#contact">
              Contact
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <PageLink className={classes.menuLinks} to="/careers">
              Careers
            </PageLink>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
