import { call, put, take, takeEvery, select, join, fork } from 'redux-saga/effects';
import { FETCH_START, FETCH_ERROR, FETCH_SUCCESS } from '../types/common';
import { ASYNCDATA, ADD } from '../types/counter';
function* asyncDataAction(action) {
  console.log('asyncDataAction');
  try {
    function fetchData() {
      return new Promise((resolev, reject) => {
        console.log('进入');
        setTimeout(() => {
          resolev({ name: 'zzx 123' });
        }, 1000);
      });
    }
    yield put({ type: FETCH_START });
    const data = yield call(fetchData);
    yield put({ type: ADD });
    yield put({ type: FETCH_SUCCESS, data });
  } catch (error) {
    yield put({ type: FETCH_ERROR, error });
  }
}

function* rootSaga() {
  console.log('rootSaga');
  yield takeEvery(ASYNCDATA, asyncDataAction);
}
export default rootSaga;
