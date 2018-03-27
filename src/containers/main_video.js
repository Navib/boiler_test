import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/main_video";

const mapStateToProps = (state, OwnProps) => {
  return { videos: state.videos.data };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return dispatch({ type: actions.GET_VIDEOS });
};

const MainVideo = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default MainVideo;
