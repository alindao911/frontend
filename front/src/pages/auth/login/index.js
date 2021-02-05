import React from "react";

const Login = (props) => {
  const { form, handleOnChange } = props;
  return (
    <div>
      <div className={"input"}>
        <label>Email</label>
        <input
          value={form.email.value}
          onChange={(event) => handleOnChange(event, form.email.name)}
        />
        <label>Password</label>
        <input
          value={form.password.value}
          onChange={(event) => handleOnChange(event, form.password.name)}
          type={"password"}
        />
      </div>
      <button className={"button primary"} onClick={props.clicked}>
        Login
      </button>
    </div>
  );
};

export default Login;
