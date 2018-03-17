import React, { Component } from "react";
import PropTypes from "prop-types";

const Header = props => {
  console.log("Menu Container:", props);
  const { name } = props.header;

  if (props.header === undefined) return <div>loading...</div>;

  return (
    <div className="header-wrapper">
      <div className="header-img" />
      <div className="card-info">
        <div className="name">{name}</div>
        <div className="attr">Name</div>
      </div>
      <div className="left-side">Left</div>
      <div className="right-side">Right</div>
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.object
};

Header.defaultProps = {
  header: {
    name: "Test Name"
  }
};

export default Header;
