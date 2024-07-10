import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ size, children }) => {
  const Heading = `h${size}`;
  const className = `title-h${size}`;

  return (
    <div className="heading">
      <Heading className={className}>{children}</Heading>
    </div>
  );
};

Title.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  size: 1,
};

export default Title;
