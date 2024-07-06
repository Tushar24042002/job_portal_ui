import React from "react";

const Select = ({ name = "name", value, onChange, data }) => {
  return (
    <select
      className="form-control form-select"
      name={name}
      value={value}
      onChange={onChange}
    >
      {data &&
        data.map((e, index) => {
          return (
            <option key={index} value={e.key}>
              {e.value}
            </option>
          );
        })}
    </select>
  );
};

export default Select;
