import axios from "axios";
import actions from "../actions";

const makeRequestQuote = () =>
  axios.get("https://api.myjson.com/bins/dc50v", {
    withCredentials: false
  });

export default {
  getQuotes: () => makeRequestQuote()
};
