import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/footer";

const mapStateToProps = (state, OwnProps) => {
  return { footer: state.footer.data };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return dispatch({ type: actions.GET_FOOTER });
};

const Footer = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default Footer;
