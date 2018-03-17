import axios from "axios";
import actions from "../actions";

const makeRequest = (urlExtension, data = {}) =>
  axios.get("https://api.myjson.com/bins/f4o3f", data, {
    withCredentials: false
  });

export default {
  getStuff: () => makeRequest("getStuff.php")
};
