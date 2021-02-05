import React, { useState } from "react";
import { connect } from "react-redux";

import "./auth.css";
import LoginForm from "./login";
import RegisterForm from "./register";
import * as homeActions from "../home/store/actions";

const Auth = (props) => {
  const formState = {
    email: {
      name: "email",
      value: "",
    },
    password: {
      name: "password",
      value: "",
    },
    confirm_password: {
      name: "confirm_password",
      value: "",
    },
  };

  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ ...formState });

  const handleOnChange = (event, name) => {
    const updatedForm = {
      ...form,
      [name]: {
        ...form[name],
        value: event.target.value,
        touched: true,
      },
    };

    setForm(updatedForm);
  };

  const handleLogin = () => {
    let user = props.auth.find((item) => item.email === form.email.value);
    if (user) {
      if (user.password === form.password.value) {
        localStorage.setItem("isLoggedin", true);
        props.setIsLoggedIn(true);
        props.handleAuthFormToggle(false);
        setForm({ ...formState });
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const handleRegister = () => {
    localStorage.setItem("isLoggedin", true);
    props.setIsLoggedIn(true);
    props.handleAuthFormToggle(false);
    props.handleSaveUser({
      email: form.email.value,
      password: form.password.value,
    });
    setIsLogin(true);
    setForm({ ...formState });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.email.value !== "" && form.password.value !== "") {
      if (isLogin) {
        handleLogin();
      } else {
        handleRegister();
      }
    } else {
      alert("Please input all necessary fields!");
    }
  };

  return (
    <div className={"auth"}>
      <div className={"form-label"}>{isLogin ? "Login" : "Register"}</div>
      <form onSubmit={handleSubmit}>
        {isLogin ? (
          <LoginForm form={form} handleOnChange={handleOnChange} />
        ) : (
          <RegisterForm form={form} handleOnChange={handleOnChange} />
        )}
      </form>
      <div className={"auth-form--btn-footer"}>
        {isLogin ? "No account yet?" : "Already have an account?"}
        <button
          className={"button secondary"}
          onClick={() => {
            setIsLogin(!isLogin);
            setForm({ ...formState });
          }}
        >
          <span>{isLogin ? "Register here" : "Login here"}</span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.home.auth,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoggedIn: (isLoggedIn) =>
    dispatch(homeActions.setIsLoggedIn(isLoggedIn)),
  handleAuthFormToggle: (authFormVisible) =>
    dispatch(homeActions.setAuthFormOpen(authFormVisible)),
  handleSaveUser: (user) => dispatch(homeActions.setRegisteredUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
