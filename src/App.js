import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import Main from "./pages/Home/Main/Main";

import About from "./pages/About/About";
import allEvent from "./pages/All_Events/ShowAll";
import Modals from "./components/Modals/index";
import SignUp from "./pages/SignUp/SignUp";

const App = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Main} />
          <Route path="/allEvent" component={allEvent}/>
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
      <Modals />
    </>
  );
};

const mapStateToProps = (state) => {
  return { viaLogin: state.login.viaLogin };
};

export default connect(mapStateToProps)(App);
