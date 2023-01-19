import { takeEvery, select, put, call } from "redux-saga/effects";
import { getHotels } from "../../api";
import { setHotels } from "../actions/actionCreator";
import { GET_HOTELS } from "../constants";

export function* workerSaga() {
  const info = yield select(({ data }) => data?.dataLists[0]);
  const data = yield call(getHotels, info);
  yield put(setHotels(data));
}

export function* watchClickSaga() {
  yield takeEvery(GET_HOTELS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
