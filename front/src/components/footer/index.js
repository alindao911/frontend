import React from "react";

import "./footer.css";
import whiteLogo from "../../assets/images/white-logo.png";

const footer = (props) => {
  return (
    <footer className={"Footer"}>
      <div className={"FooterContent"}>
        <img src={whiteLogo} alt="Footer Logo" />
        <div className={"FooterSubContent"}>
          <p className={"FooterText"}>
            サンプルテキストサンプル
            ルテキストサンプルテキストサンプルテキストサンプル ルテキスト
          </p>
        </div>
      </div>
      <div className={"FooterBottom"}>
        <span>Copyright©2007-{new Date().getFullYear()} Blog Inc.</span>
      </div>
    </footer>
  );
};

export default footer;
