import React, { useState } from "react";

import "./auth.css";
import Login from "./login";
import Register from "./register";

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className={"Auth"}>
      <div className={"FormLabel"}>{isLogin ? "Login" : "Register"}</div>
      <form>{isLogin ? <Login /> : <Register />}</form>
      <div className={"Auth__form--btn-footer"}>
        {isLogin ? "No account yet?" : "Already have an account?"}
        <button
          className={"Button Secondary"}
          onClick={() => setIsLogin(!isLogin)}
        >
          <span>{isLogin ? "Register here" : "Login here"}</span>
        </button>
      </div>
    </div>
  );
};

export default Auth;
