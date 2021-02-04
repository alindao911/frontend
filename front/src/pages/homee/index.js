import React from "react";
import { connect } from "react-redux";

import "./home.css";
import Auth from "../auth";

const Home = (props) => {
  return (
    <div>
      <section
        className="AuthForm"
        style={props.isAuthFormOpened ? { maxHeight: "600px" } : {}}
      >
        <Auth />
      </section>
      <section
        className={"SliderSection"}
        style={props.isAuthFormOpened ? { display: "none" } : {}}
      >
        <h1>Slider</h1>
      </section>
      <section className={"NewsSection"}>
        <h1>News</h1>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthFormOpened: state.home.isAuthFormOpened,
});

export default connect(mapStateToProps)(Home);
