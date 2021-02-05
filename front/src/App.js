import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import * as homeActions from "../src/pages/home/store/actions";
import * as newsActions from "../src/pages/news/store/actions";
import { news, auth } from "./assets/data";

import Home from "./pages/home";
import News from "./pages/news";
import NewsDetail from "./pages/news/detail";
import Layout from "./components/layout";

class App extends Component {
  componentDidMount() {
    this.props.setInitialAuthData(auth);
    this.props.setInitialNewsData(news);
    this.props.setIsLoggedIn(localStorage.getItem("isLoggedin"));
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/news/create" component={NewsDetail} />
          <Route path="/news/:id" component={NewsDetail} />
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
  setInitialAuthData: (auth) => dispatch(homeActions.setInitiaAuthData(auth)),
  setInitialNewsData: (news) => dispatch(newsActions.setInitialNewsData(news)),
  setIsLoggedIn: (isLoggedIn) =>
    dispatch(homeActions.setIsLoggedIn(isLoggedIn)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
