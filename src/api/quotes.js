import axios from "axios";
import actions from "../actions";

const makeRequestQuote = () =>
  axios.get("https://api.myjson.com/bins/157ovn", {
    withCredentials: false
  });

export default {
  getQuotes: () => makeRequestQuote()
};
