import React from "react";
import PropTypes from "prop-types";
import Header from "../containers/header";
import Videos from "../containers/videos";
import Quotes from "../containers/quotes";
import Divider from "material-ui/Divider";

const App = props => (
  <div>
    <Header />
    <Videos />
    <Divider style={{ marginTop: "4em" }} />
    <Quotes />
    <Divider />
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
