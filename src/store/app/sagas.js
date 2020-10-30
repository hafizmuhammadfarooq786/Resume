import { put, takeEvery } from "redux-saga/effects";

import { INITIALIZE, initialized } from "./actions";

function* initializeApp() {
  yield put(initialized(true));
}

function* appSaga() {
  yield takeEvery(INITIALIZE, initializeApp);
}

export default appSaga;
