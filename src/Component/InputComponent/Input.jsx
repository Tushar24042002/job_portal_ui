import React from "react";

const Input = ({ type = "text", name = "name", value, onInput, placeHolder }) => {
  return (
    <input className="form-control" type={type} name={name} value={value} onInput={onInput} placeholder={placeHolder} />
  );
};

export default Input;
