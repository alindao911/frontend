import React from "react";

import "./footer.css";
import whiteLogo from "../../assets/images/white-logo.png";

const footer = (props) => {
  return (
    <footer className={"footer"}>
      <div className={"footer-container"}>
        <img src={whiteLogo} alt="Footer Logo" />
        <div className={"footer-sub-container"}>
          <p className={"footer-text"}>
            サンプルテキストサンプル
            ルテキストサンプルテキストサンプルテキストサンプル ルテキスト
          </p>
        </div>
      </div>
      <div className={"footer-btm"}>
        <span>Copyright©2007-{new Date().getFullYear()} Blog Inc.</span>
      </div>
    </footer>
  );
};

export default footer;
