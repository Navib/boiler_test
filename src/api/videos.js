import axios from "axios";
import actions from "../actions";

const makeRequestVid = () =>
  axios.get("https://api.myjson.com/bins/100zff", {
    withCredentials: false
  });

export default {
  getVideos: () => makeRequestVid()
};
