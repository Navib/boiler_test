import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import Menu from "../containers/Menu";
import Test from "../containers/test";
import GridInline from "../components/grid_inline";

const App = props => (
  <div>
    <Menu />
    <RaisedButton label={props.buttonText} onClick={props.onClick} />
    <GridInline />
    <Test />
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
