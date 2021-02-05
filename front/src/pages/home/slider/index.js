import React, { useState } from "react";
import moment from "moment";

import rightArrow from "../../../assets/images/right-arrow.png";
import leftArrow from "../../../assets/images/left-arrow.png";

const Arrows = (props) => {
  return (
    <div className={"slider-arrows"}>
      <img
        onClick={() => props.setPreviousNews()}
        src={leftArrow}
        alt="left arrow slider"
      />
      <img
        onClick={() => props.setNextNews()}
        src={rightArrow}
        alt="right arrow slider"
      />
    </div>
  );
};

const Ellipses = (props) => {
  return (
    <div className={"slider-ellipses"}>
      <ul>
        {props.news.map((post, index) => {
          return (
            <li key={index}>
              <a
                href
                className={
                  index === props.activeNewsIndex
                    ? "slider-ellipses--active"
                    : null
                }
                onClick={() => props.setActiveNews(index)}
              >
                {" "}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Content = (props) => {
  return (
    <>
      <img
        className={"SliderBg"}
        src={props.activeNews.img_url ? props.activeNews.img_url : null}
        alt="slider"
      />
      <div className={"slider-content"}>
        <p className={"slider-title-container"}>
          <span className={"slider-title"}>{props.activeNews.title}</span>
          <span className={"slider-date"}>
            {moment(props.activeNews.date).format("YYYY.MM.DD")}
          </span>
        </p>
      </div>
    </>
  );
};

const Slider = (props) => {
  const { news } = props;
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  const setActiveNews = (index) => {
    setActiveNewsIndex(index);
  };

  const setPreviousNews = () => {
    if (activeNewsIndex > 0) {
      setActiveNewsIndex(activeNewsIndex - 1);
    } else {
      setActiveNewsIndex(2);
    }
  };

  const setNextNews = () => {
    if (activeNewsIndex < 2) {
      setActiveNewsIndex(activeNewsIndex + 1);
    } else {
      setActiveNewsIndex(0);
    }
  };

  let activeNews = news[activeNewsIndex];

  return (
    <div className={"slider"}>
      <Content activeNews={activeNews} />
      <Arrows setNextNews={setNextNews} setPreviousNews={setPreviousNews} />
      <Ellipses
        news={news}
        activeNewsIndex={activeNewsIndex}
        setActiveNews={setActiveNews}
      />
    </div>
  );
};

export default Slider;
