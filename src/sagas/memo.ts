import { takeLatest, all, call, put, take } from 'redux-saga/effects'
import * as api from '../apis'
import {
  FETCH_MEMO_LIST,
  FETCH_MEMO,
  FETCH_DELETED_MEMO_LIST,
  FETCH_DELETED_MEMO,
  ADD_MEMO,
  DELETE_MEMO,
  RESTORE_MEMO,
  CLEAR_API_CALL_STATUS,
  SHOW_DIALOG,
  CONFIRM_DIALOG,
} from '../actions/types';
import {
  FetchMemoAction,
  FetchDeletedMemoAction,
  AddMemoAction,
  DeleteMemoAction,
  RestoreMemoAction
} from '../reducers/memo';
import { push } from 'connected-react-router';


export default function* memoSaga() {
  yield all([
    takeLatest(FETCH_MEMO_LIST.REQUEST, fetchMemoList$),
    takeLatest(FETCH_DELETED_MEMO_LIST.REQUEST, fetchDeletedMemoList$),
    takeLatest(FETCH_MEMO.REQUEST, fetchMemo$),
    takeLatest(FETCH_DELETED_MEMO.REQUEST, fetchDeletedMemo$),
    takeLatest(ADD_MEMO.REQUEST, addMemo$),
    takeLatest(DELETE_MEMO.REQUEST, deleteMemo$),
    takeLatest(RESTORE_MEMO.REQUEST, restoreMemo$),
  ])
}

function* fetchMemoList$() {
  try {
    // throw Error()
    const memos = yield call(api.fetchMemoList)
    yield put({ type: FETCH_MEMO_LIST.SUCCESS, payload: memos })
  } catch (err) {
    yield put({ type: FETCH_MEMO_LIST.FAILURE, payload: '메모 목록 불러오기에 실패했습니다.' })
  } finally {
    yield put({ type: CLEAR_API_CALL_STATUS })
  }
}

function* fetchDeletedMemoList$() {
  try {
    // throw Error()
    const memos = yield call(api.fetchDeletedMemoList)
    yield put({ type: FETCH_DELETED_MEMO_LIST.SUCCESS, payload: memos })
  } catch (err) {
    yield put({ type: FETCH_MEMO_LIST.FAILURE, payload: '삭제된 메모 목록 불러오기에 실패했습니다.' })
  }
}

function* fetchMemo$(action: FetchMemoAction) {
  const { payload } = action;
  if (!payload) return;

  try {
    const memo = yield call(api.fetchMemo, payload)
    yield put({ type: FETCH_MEMO.SUCCESS, payload: memo })
  } catch (err) {
    yield put({ type: FETCH_MEMO.FAILURE, payload: '메모 불러오기에 실패했습니다.' })
  }
}

function* fetchDeletedMemo$(action: FetchDeletedMemoAction) {
  const { payload } = action;
  if (!payload) return;

  try {
    const memo = yield call(api.fetchMemo, payload)
    yield put({ type: FETCH_DELETED_MEMO.SUCCESS, payload: memo })
  } catch (err) {
    yield put({ type: FETCH_DELETED_MEMO.FAILURE, payload: '메모 삭제에 실패했습니다.' })
  }
}

function* addMemo$(action: AddMemoAction) {
  const { payload } = action;
  if (!payload) return;

  try {
    // throw Error();
    const memo = yield call(api.addMemo, payload)
    yield put({ type: ADD_MEMO.SUCCESS, payload: memo })
    yield put({ type: SHOW_DIALOG, payload: {
      type: 'alert',
      text: '메모가 생성되었습니다. 메뉴 수정 화면으로 이동합니다.'
    }})
    yield take(CONFIRM_DIALOG)

    yield put(push(`/memo/${memo.id}`))
  } catch (err) {
    yield put({ type: ADD_MEMO.FAILURE, payload: '메모 추가에 실패했습니다.' })
  } finally {
    yield put({ type: CLEAR_API_CALL_STATUS })
  }
}

function* deleteMemo$(action: DeleteMemoAction) {
  const { payload } = action;
  if (!payload) return;

  try {
    const confirmDelete: boolean = yield call(window.confirm, '이 메모를 삭제할까요?')
    if (confirmDelete) {
      yield call(api.deleteMemo, payload)
      yield put({ type: DELETE_MEMO.SUCCESS, payload: payload })
      yield put(push('/memo'))
    } else {
      yield put({ type: DELETE_MEMO.FAILURE })
    }
  } catch (err) {
    yield put({ type: DELETE_MEMO.FAILURE, payload: err })
  } finally {
    yield put({ type: CLEAR_API_CALL_STATUS })
  }
}

function* restoreMemo$(action: RestoreMemoAction) {
  const { payload } = action
  if (!payload) return;

  try {
    yield call(api.resotreMemo, payload)
    yield put({
      type: RESTORE_MEMO.SUCCESS,
      payload
    })

    //todo 
    history.pushState({}, '', '/trash')
  } catch (err) {
    yield put({
      type: RESTORE_MEMO.FAILURE,
      payload: err
    })
  }
}