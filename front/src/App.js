import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css"

import Home from "./pages/home";
import News from "./pages/news";
import Layout from "./components/layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/news" component={News} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
