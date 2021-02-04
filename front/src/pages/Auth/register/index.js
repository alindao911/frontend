import React from "react";

const Register = (props) => {
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
          type={"password"}
        />
        <label className={"Label"}>Confirm Password</label>
        <input
          className={"Input"}
          value={props.value}
          onChange={props.changed}
          type={"password"}
        />
      </div>
      <button className={"Button Primary"} onClick={props.clicked}>
        Register
      </button>
    </div>
  );
};

export default Register;
