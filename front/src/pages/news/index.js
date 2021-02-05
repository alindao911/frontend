import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./news.css";
import NewsItem from "./item";

const News = (props) => {
  let row = [];

  if (props.news) {
    props.news.map((item) => row.push(<NewsItem key={item.id} item={item} />));
  }

  return (
    <div>
      <section className={"news"}>
        <div className={"news-header"}>
          <h1>News</h1>
          {props.isLoggedIn && (
            <Link
              to="/news/create"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Create New Post
            </Link>
          )}
        </div>
        <ul className={"news-container"}>{row}</ul>
        <div className={"news-btn"}>
          <button className={"button primary"} onClick={props.clicked}>
            Load More
          </button>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.news.news,
  isLoggedIn: state.home.isLoggedIn,
});

export default connect(mapStateToProps)(News);
