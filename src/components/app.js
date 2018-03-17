import React from "react";
import PropTypes from "prop-types";
import Header from "../containers/header";

const App = props => (
  <div>
    <Header />
  </div>
);

App.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

App.defaultProps = {
  buttonText: "defaultText",
  onClick: () => console.log("default click action")
};

export default App;
