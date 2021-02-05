import React from "react";
import "./breadcrumbs.css";

const Breadcrumbs = (props) => {
  return (
    <div className={"breadcrumbs-container"}>
      <div className={"breadcrumbs"}>{props.children}</div>
    </div>
  );
};

export default Breadcrumbs;
