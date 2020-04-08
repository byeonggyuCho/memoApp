import * as types from '../actions/types'
import {AddMemoAction} from '../actions'
import { call, put, takeLatest,take } from 'redux-saga/effects'
import * as api from '../apis'
import { push } from 'connected-react-router';

export function* fetchMemoList$() {
    try {
      const memos = yield call(api.fetchMemoList)
      yield put({ type: types.FETCH_MEMO_LIST.SUCCESS, payload: memos })
    } catch (err) {
        yield put( {type: types.FETCH_MEMO_LIST.FAILURE, payload: err})
      // 실패 로직: 나중에 작성할 것임 
    } finally{
      yield put({ type: types.CLEAR_API_CALL_STATUS })
    }
}



export function* addMemo$ (action:AddMemoAction) {

  const {payload} = action;
  if(!payload) return;

  try{

    const memo = yield call(api.addMemo,payload);
    yield put({
      type:types.ADD_MEMO.REQUEST,
      payload : memo
    })
    yield put({
      type:types.SHOW_DIALOG,
      payload : {
        type: 'alert',
        text: '메모가 생성되었습니다. 메뉴 수정화면으로 돌아갑니다.'
      }
    })

     // 얼럿을 닫을 때까지 대기 
     yield take(types.CONFIRM_DIALOG)


    // 생성된 메모 조회화면으로 이동
    yield put(push(`/memo/${memo.id}`));

  }catch(e){
    yield put({
      type:types.ADD_MEMO.FAILURE,
      error: e
    })

  }finally{
    yield put({
      type: types.CLEAR_API_CALL_STATUS
    })
  }
}



export default function* memoSaga(){
    yield takeLatest(types.FETCH_MEMO_LIST.REQUEST, fetchMemoList$) 
    yield takeLatest(types.ADD_MEMO.REQUEST, addMemo$)
}