import { takeLatest, put, call, all } from "redux-saga/effects";
import actions from "../actions";
import api from "../api";
import header from "../api/header";
import videos from "../api/videos";

function* getStuff() {
  console.log("Stuff");
  try {
    const data = yield call(header.getStuff);
    yield put({ type: actions.GOT_STUFF, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* getVideos() {
  console.log("Videos");
  try {
    const data = yield call(videos.getVideos);
    yield put({ type: actions.GOT_VIDEOS, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

export function* sagas() {
  yield all([
    takeLatest(actions.GET_HEADER, getStuff),
    takeLatest(actions.GET_VIDEOS, getVideos)
  ]);
}
