import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/header";

const mapStateToProps = (state, ownProps) => {
  console.log("state: ", state);
  return {
    header: state.header.data
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return dispatch({ type: actions.GET_HEADER });
};

const Header = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default Header;
