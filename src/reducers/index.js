import { combineReducers } from "redux";
import basicReducer from "./basic_reducer";
import headerReducer from "./header_reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  routing: routerReducer,
  text: basicReducer,
  header: headerReducer
});

export default rootReducer;
