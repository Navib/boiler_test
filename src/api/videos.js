import axios from "axios";
import actions from "../actions";

const makeRequestVid = () =>
  axios.get("https://api.myjson.com/bins/1649pv", {
    withCredentials: false
  });

export default {
  getVideos: () => makeRequestVid()
};
