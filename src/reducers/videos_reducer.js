import actions from "../actions";

const videosReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_VIDEOS:
      return action.data;
    default:
      return state;
  }
};

export default videosReducer;
