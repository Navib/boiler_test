import axios from "axios";
import actions from "../actions";

const makeRequestQuote = () =>
  axios.get("https://api.myjson.com/bins/mxpdy", {
    withCredentials: false
  });

export default {
  getQuotes: () => makeRequestQuote()
};
