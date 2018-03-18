import actions from "../actions";

const footerReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_FOOTER:
      return action.data;
    default:
      return state;
  }
};

export default footerReducer;
