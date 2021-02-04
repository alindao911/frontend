import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";
import Logo from "../../assets/images/logo.png";

const nav = (props) => (
  <header className={"Toolbar"}>
    <div className={"LogoContainer"}>
      <div className={"Logo"}>
        <Link to="/">
          <img src={Logo} alt="Blog Logo" />
        </Link>
      </div>
    </div>
    <nav className={"DesktopOnly"}>
      <ul className={"NavigationItems"}>
        <li onClick={props.handleAuthFormToggle}>
          {props.isAuthFormOpened ? "Close" : "Login"}
        </li>
      </ul>
    </nav>
  </header>
);

export default nav;
