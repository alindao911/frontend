import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./nav.css";
import Logo from "../../assets/images/logo.png";
import * as homeActions from "../../pages/home/store/actions";

const nav = (props) => (
  <header className={"navbar"}>
    <div className={"logo-container"}>
      <div className={"logo"}>
        <Link to="/">
          <img src={Logo} alt="Blog Logo" />
        </Link>
      </div>
    </div>
    <nav>
      <ul className={"nav-items"}>
        {!props.isLoggedIn ? (
          <li onClick={props.handleAuthFormToggle}>
            {props.isAuthFormOpened ? "Close" : "Login"}
          </li>
        ) : (
          <li
            onClick={() => {
              props.setIsLoggedIn(false);
              localStorage.removeItem("isLoggedin");
              props.history.push("/");
            }}
          >
            Logout
          </li>
        )}
      </ul>
    </nav>
  </header>
);

const mapStateToProps = (state) => ({
  isLoggedIn: state.home.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoggedIn: (isLoggedIn) =>
    dispatch(homeActions.setIsLoggedIn(isLoggedIn)),
});

export default connect(mapStateToProps, mapDispatchToProps)(nav);
