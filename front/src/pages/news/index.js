import React from "react";
import { Link } from "react-router-dom";

import "./news.css";

const News = (props) => {
  return (
    <div>
      <section className={"Articles"}>
        <div className={"ArticleNavWrapper"}>
          <h1>News</h1>
          {props.isAuthenticated && (
            <Link to="/article/new">Create New Post</Link>
          )}
        </div>
        <ul className={"ArticlesWrapper"}>try</ul>
        <div className={"ArticlesBtnWrapper"}>
          <button className={"Button Primary"} onClick={props.clicked}>
            Load More
          </button>
        </div>
      </section>
    </div>
  );
};

export default News;
