import React from "react";

function Input(props: any) {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        id={props.name}
        type={props.type}
        autoFocus
        className="input-style"
      />
      {props.error && <div>{props.error}</div>}
    </>
  );
}

export default Input;
