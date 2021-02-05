import React from "react";
import moment from "moment";

const Contents = (props) => {
  const {
    news,
    comment,
    isDetailsMode,
    handleOnChange,
    handleCommentOnChange,
    handleSubmitComment,
  } = props;

  const displayComments = () => {
    return (
      <section className={"comments"}>
        <h1>Comments</h1>
        {news.comments &&
          news.comments.map((comment, index) => {
            return (
              <div key={index} className={"comment-box"}>
                <p>{comment.comment}</p>
                <span>{moment(comment.date).fromNow()}</span>
              </div>
            );
          })}

        <textarea
          className={"comment-area"}
          placeholder="Write Comment"
          name="comment"
          value={comment}
          onChange={(event) => handleCommentOnChange(event)}
        ></textarea>
        <div className={"comment-btn-container"}>
          <button
            className={"button primary"}
            onClick={() => handleSubmitComment()}
          >
            Submit
          </button>
        </div>
      </section>
    );
  };

  return isDetailsMode ? (
    <div key={news.id} className={"details-container"}>
      <div className={"details-date"}>
        {moment(new Date(news.date)).format("YYYY.MM.DD")}
      </div>
      <div className={"details-title"}>{news.title}</div>
      <div className={"details-img"}>
        <img src={news.img_url} alt="Article Thumbnail" />
      </div>
      <div className={"details-description"}>{news.description}</div>
      <div className={"details-separator"}></div>
      {displayComments()}
    </div>
  ) : (
    <div className={"details-container"}>
      <div className={"details-date"}>
        {moment(new Date(news.date)).format("YYYY.MM.DD")}
      </div>
      <div className={"details-title"}>
        <input
          name={"title"}
          value={news.title}
          onChange={(event) => handleOnChange(event, "title")}
        />
      </div>
      <div className={"details-img"}>
        <img src={news.img_url} alt="Article Thumbnail" />
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
          value={news.description}
          onChange={(event) => handleOnChange(event, "description")}
        />
      </div>
      <div className={"details-separator"}></div>
      {displayComments()}
    </div>
  );
};

export default Contents;
