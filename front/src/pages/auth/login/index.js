import React from "react";

const Login = (props) => {
  return (
    <div>
      <div className={"Input"}>
        <label className={"Label"}>Email</label>
        <input
          className={"Input"}
          value={props.value}
          onChange={props.changed}
        />
        <label className={"Label"}>Password</label>
        <input
          className={"Input"}
          value={props.value}
          onChange={props.changed}
          type={'password'}
        />
      </div>
      <button className={"Button Primary"} onClick={props.clicked}>
        Login
      </button>
    </div>
  );
};

export default Login;