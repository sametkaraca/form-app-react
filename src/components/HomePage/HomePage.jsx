import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import EventContainer from "../EventContainer/EventContainer";
import Register from "../Register/Register";

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route path="/" component={EventContainer} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default HomePage;
