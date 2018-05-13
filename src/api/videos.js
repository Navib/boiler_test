import axios from "axios";
import actions from "../actions";

const makeRequestVid = () =>
  axios.get("https://api.myjson.com/bins/g7i92", {
    withCredentials: false
  });

export default {
  getVideos: () => makeRequestVid()
};
