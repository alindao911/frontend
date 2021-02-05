import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

const NewsItem = ({ item }) => {
  const history = useHistory();

  return (
    <li
      className={"news-item"}
      onClick={() => {
        history.push(`/news/${item.id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className={"news-img"}>
        <img src={item.img_url} alt="News Img Thumbnail" />
      </div>
      <div className={"news-details"}>
        <span className={"news-date"}>
          {moment(new Date(item.date)).format("YYYY.MM.DD")}
        </span>
        <span className={"news-title"}>{item.title}</span>
        <span className={"news-description"}>{item.description}</span>
      </div>
    </li>
  );
};

export default NewsItem;
