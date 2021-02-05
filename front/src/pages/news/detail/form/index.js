import React from "react";
import moment from "moment";

const Form = (props) => {
  const { news, handleOnChange } = props;
  return (
    <div className={"details-container"}>
      <div className={"details-date"}>
        {moment(new Date()).format("YYYY.MM.DD")}
      </div>
      <div className={"details-title"}>
        <input
          name={"title"}
          placeholder={"Title"}
          value={news.title}
          onChange={(event) => handleOnChange(event, "title")}
        />
      </div>
      <div className={"details-img"}>
        <div className={"upload-btn-container"}>
          <button
            className={"button primary"}
            onClick={() => {
              console.log("clikced");
            }}
          >
            Upload
          </button>
        </div>
      </div>
      <div className={"details-description"}>
        <textarea
          className={"details-description"}
          name={"description"}
          placeholder={"Description"}
          value={news.description}
          onChange={(event) => handleOnChange(event, "description")}
        />
      </div>
      <div className={"details-separator"}></div>
    </div>
  );
};

export default Form;
