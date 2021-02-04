import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import * as actions from "../src/pages/home/store/actions";
import { news, auth } from "./assets/data";

import Home from "./pages/home";
import News from "./pages/news";
import Layout from "./components/layout";

class App extends Component {
  componentDidMount() {
    this.props.handleFetchInitialData({ news: news, auth: auth });
  }

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

const mapStateToProps = (state) => ({
  news: state.home.news,
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchInitialData: (news) => dispatch(actions.setInitialData(news)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
