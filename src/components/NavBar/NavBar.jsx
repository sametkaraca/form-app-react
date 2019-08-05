import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.scss";

export default () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.navbarUpper} />
      <div className="container">
        <nav className="py-4">
          <Link className={classes.navLink} to="/">
            New Event
          </Link>
        </nav>
      </div>
    </div>
  );
};
