import actions from "../actions";

const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_QUOTES:
      return action.data;
    default:
      return state;
  }
};

export default quotesReducer;
