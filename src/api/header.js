import axios from "axios";
import actions from "../actions";

const makeRequest = () =>
  axios.get("https://api.myjson.com/bins/f4o3f", {
    withCredentials: false
  });

export default {
  getStuff: () => makeRequest()
};
