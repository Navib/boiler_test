import { combineReducers } from "redux";
import basicReducer from "./basic_reducer";
import headerReducer from "./header_reducer";
import videosReducer from "./videos_reducer";
import quotesReducer from "./quotes_reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  routing: routerReducer,
  text: basicReducer,
  header: headerReducer,
  videos: videosReducer,
  quotes: quotesReducer
});

export default rootReducer;
