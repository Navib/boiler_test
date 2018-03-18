import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/videos";

const mapStateToProps = (state, OwnProps) => {
  return { videos: state.videos.data };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return dispatch({ type: actions.GET_VIDEOS });
};

const Videos = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default Videos;
