import React from "react";

const Register = (props) => {
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
        <label>Confirm Password</label>
        <input
          value={form.confirm_password.value}
          onChange={(event) =>
            handleOnChange(event, form.confirm_password.name)
          }
          type={"password"}
        />
      </div>
      <button className={"button primary"} onClick={props.clicked}>
        Register
      </button>
    </div>
  );
};

export default Register;
