import axios from "axios";
import actions from "../actions";

const makeRequestFooter = () =>
  axios.get("https://api.myjson.com/bins/ctbbn", {
    withCredentials: false
  });

export default {
  getFooter: () => makeRequestFooter()
};
