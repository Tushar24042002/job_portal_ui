import React from "react";

const TextArea = ({
  type = "text",
  name = "name",
  value,
  onInput,
  placeHolder,
}) => {
  return (
    <textarea
      className="form-control"
      type={type}
      name={name}
      value={value}
      onInput={onInput}
    ></textarea>
  );
};

export default TextArea;
