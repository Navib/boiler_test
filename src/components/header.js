import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import "../assets/header_face.png";

const Header = props => {
  const { name, location, demoImg, attributes, imgSrc } = props.header;
  const headerStyle = {
    backgroundImage: `url(${props.header.imgSrc})`,
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center top",
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: "-1",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat"
  };

  if (props.header === undefined) return <div>loading...</div>;

  return (
    <div className="header-wrapper">
      <div className="header-img" style={headerStyle} />
      <Paper className="card-info" zDepth={4}>
        <div className="name">{name}</div>
        <div className="attr">{attributes[0]}</div>
        <div className="location">{location}</div>
      </Paper>
      <div className="left-side">{attributes[2]}</div>
      <div className="right-side">{attributes[1]}</div>
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.object
};

Header.defaultProps = {
  header: {
    name: "Test Name",
    location: "Test Location",
    demoImg: "http://via.placeholder.com/1000x800",
    attributes: ["default1", "default2", "default3"]
  }
};

export default Header;
