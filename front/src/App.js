import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css"

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Article from "./pages/Article";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/article" component={Article} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
