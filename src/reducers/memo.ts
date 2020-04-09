import {Memo} from '../models'
import MemoActionTypes,{ 
  FETCH_MEMO_LIST, 
  DELETE_MEMO, 
  RESTORE_MEMO, 
  FETCH_MEMO, 
  FETCH_DELETED_MEMO_LIST, 
  FETCH_DELETED_MEMO, 
  ADD_MEMO
} from '../actions/memo'

export interface MemoState {
  memos: Memo[],
  deletedMemos: Memo[],
}

const initialState: MemoState = {
  memos: [],
  deletedMemos: [],
}



const memoReducer = (state = initialState, action: MemoActionTypes): MemoState => {
  switch (action.type) {
    case FETCH_MEMO_LIST.SUCCESS:
      return {
        ...state,
        memos: action.payload.map(memo => ({
          ...memo
        }))
      }
    case FETCH_DELETED_MEMO_LIST.SUCCESS:
      return {
        ...state,
        deletedMemos: action.payload
      }
    case FETCH_MEMO.SUCCESS:
      return {
        ...state,
        memos: state.memos.map(memo => {
          if (memo.id !== action.payload.id) return memo
          return { ...action.payload }
        })
      }
    case FETCH_DELETED_MEMO.SUCCESS:
      return {
        ...state,
        deletedMemos: state.deletedMemos.map(memo => {
          if (memo.id !== action.payload.id) return memo
          return { ...action.payload }
        })
      }
    case ADD_MEMO.SUCCESS:
      return {
        ...state,
        memos: [action.payload, ...state.memos]
      }
    case DELETE_MEMO.SUCCESS:
      if (!action.payload) return state;
      return {
        ...state,
        memos: state.memos.filter(memo => {
          return memo.id !== action.payload
        })
      }
    case RESTORE_MEMO.SUCCESS:
      if (!action.payload) return state;
      return {
        ...state,
        deletedMemos: state.deletedMemos.filter(memo => {
          return memo.id !== action.payload
        })
      }
    default: 
      return state
  }
}

export default memoReducer