import { fork } from 'redux-saga/effects';
import memoSaga from './memoSaga'
import appSaga from './app'


  export default function* rootSaga() {
    yield console.log('hello world')
    yield fork(appSaga)
    yield fork(memoSaga)
  } 