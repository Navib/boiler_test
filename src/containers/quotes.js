import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/quotes";

const mapStateToProps = (state, OwnProps) => {
  console.log(state.quotes.data);
  return { quotes: state.quotes.data };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return dispatch({ type: actions.GET_QUOTES });
};

const Quotes = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default Quotes;
