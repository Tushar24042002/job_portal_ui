import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type = "text",
  name = "name",
  value,
  onInput,
  placeHolder,
}) => {
  return type === "submit" ? (
    <input
      value={value}
      type="submit"
      className={`form-control ${styles.input_btn}`}
    />
  ) : (
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      onInput={onInput}
      placeholder={placeHolder}
    />
  );
};

export default Input;
