import axios from "axios";
import actions from "../actions";

const makeRequestQuote = () =>
  axios.get("https://api.myjson.com/bins/19jx3v", {
    withCredentials: false
  });

export default {
  getQuotes: () => makeRequestQuote()
};
