import React from "react";
import { connect } from "react-redux";

import "./home.css";
import Auth from "../auth";
import News from "../news";

const Home = (props) => {
  console.log(props.news);
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
        <h1>Slider</h1>
      </section>
      <section className={"news-section"}>
        <News />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthFormOpened: state.home.isAuthFormOpened,
  news: state.home.news,
});

export default connect(mapStateToProps)(Home);
