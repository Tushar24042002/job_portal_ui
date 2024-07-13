import React from "react";
import PropTypes from "prop-types";

const DropDown = ({
  name = null,
  value = null,
  onChangeHandler = null,
  children,
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChangeHandler}
      className="form-control form-select"
    >
      {children}
    </select>
  );
};

DropDown.propTypes = {
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default DropDown;
