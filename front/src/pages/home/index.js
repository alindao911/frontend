import React from "react";
import { connect } from "react-redux";

import "./home.css";
import Auth from "../auth";
import News from "../news";
import Slider from "./slider";

const Home = (props) => {
  return (
    <div>
      <section
        className="auth-form"
        style={props.isAuthFormOpened ? { maxHeight: "600px" } : {}}
      >
        <Auth />
      </section>
      <section
        className={"slider-section"}
        style={props.isAuthFormOpened ? { display: "none" } : {}}
      >
        {props.news.length !== 0 ? (
          <Slider news={props.news.slice(0, 3)} />
        ) : null}
      </section>
      <section className={"news-section"}>
        <News />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthFormOpened: state.home.isAuthFormOpened,
  news: state.news.news,
});

export default connect(mapStateToProps)(Home);
