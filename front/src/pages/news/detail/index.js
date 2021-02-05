import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import "./detail.css";

import Breadcrumbs from "../../../components/breadcrumbs";
import Contents from "./contents";
import Form from "./form";
import * as newsActions from "../store/actions";
import imgUrl from "../../../assets/images/news-image-3.jpg";

const Options = (props) => {
  return (
    <div className={"operation-container"}>
      <div className={"operation-sub-container"}>{props.children}</div>
    </div>
  );
};

const NewsDetail = (props) => {
  const initNews = {
    title: "",
    description: "",
    img_url: imgUrl,
    date: moment().format("YYYY.MM.DD"),
    comments: [],
  };
  const [isDetailsMode, setDetailsMode] = useState(true);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [news, setNews] = useState({ ...initNews });
  const [newsForm, setNewsForm] = useState({ ...initNews });
  const [comment, setComment] = useState("");
  const history = useHistory();
  const path = props.location.pathname.split("/")[2];

  useEffect(() => {
    if (path === "create") {
      setIsCreateMode(true);
    } else {
      let newsDetail = props.news.find((item) => item.id === parseInt(path));

      if (newsDetail) {
        setNews(newsDetail);
        setNewsForm(newsDetail);
      }
    }
  }, [props.news, path]);

  const handleOnChange = (event, name) => {
    const updatedState = {
      ...news,
      [name]: event.target.value,
    };

    setNews(updatedState);
  };

  const handleSaveNews = () => {
    if (news.title !== "" && news.description !== "") {
      news.id = props.news.length + 1;
      props.handleSaveNews(news);
      history.push("/");
    } else {
      alert("Please input necessary fields!");
    }
  };

  const handleUpdateNews = () => {
    if (news.title !== "" && news.description !== "") {
      props.handleUpdateNews(news);
    } else {
      alert("Please input necessary fields!");
    }
  };

  const handleSaveComment = () => {
    const currentDate = moment(new Date());
    if (comment !== "") {
      props.handleSaveComment({
        id: news.id,
        comment: comment,
        date: currentDate,
      });
    } else {
      alert("Please input something!");
    }

    setComment("");
  };

  const displayOptions = () => {
    return (
      <Options>
        {isDetailsMode && !isCreateMode ? (
          <a
            href
            onClick={() => setDetailsMode(!isDetailsMode)}
            className={"details-option-btn"}
          >
            Edit Post
          </a>
        ) : (
          <div>
            <a
              href
              onClick={() => {
                setDetailsMode(!isDetailsMode);
                if (isCreateMode) {
                  handleSaveNews();
                } else {
                  handleUpdateNews();
                }
              }}
              className={"details-option-btn"}
            >
              Save Post
            </a>
            <a
              href
              onClick={() => {
                setDetailsMode(!isDetailsMode);
                setNews(newsForm);
                if (isCreateMode) {
                  history.push("/");
                }
              }}
              className={"details-option-btn"}
            >
              Cancel
            </a>
          </div>
        )}
      </Options>
    );
  };

  return (
    <div>
      <section>
        <Breadcrumbs>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              {isCreateMode
                ? "Create New Post"
                : isDetailsMode
                ? news.title
                : newsForm.title}{" "}
            </li>
          </div>
        </Breadcrumbs>
        {props.isLoggedIn ? displayOptions() : null}
        {!isCreateMode ? (
          <Contents
            news={news}
            comment={comment}
            isDetailsMode={isDetailsMode}
            handleOnChange={handleOnChange}
            handleCommentOnChange={(event) => setComment(event.target.value)}
            handleSubmitComment={handleSaveComment}
          />
        ) : (
          <Form news={news} handleOnChange={handleOnChange} />
        )}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.news.news,
  isLoggedIn: state.home.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleSaveNews: (news) => dispatch(newsActions.saveNewNews(news)),
  handleUpdateNews: (news) => dispatch(newsActions.saveUpdatedNews(news)),
  handleSaveComment: (comment) => dispatch(newsActions.saveNewComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
