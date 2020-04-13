import {Memo} from '../models'
import {produce} from'immer'
import MemoActionTypes,{ 
  FETCH_MEMO_LIST, 
  DELETE_MEMO, 
  RESTORE_MEMO, 
  FETCH_MEMO, 
  FETCH_DELETED_MEMO_LIST, 
  FETCH_DELETED_MEMO, 
  ADD_MEMO,
  INIT_MEMO
} from '../actions/memo'

export interface MemoState {
  memo: Memo,
  memos: Memo[],
  deletedMemos: Memo[],
}

const initialState: MemoState = {
  memo: {
    id: -1,
    content: '',
    createdAt: -1,
  },
  memos: [],
  deletedMemos: [],
}



const memoReducer = (state = initialState, action: MemoActionTypes): MemoState => {
  switch (action.type) {
    case DELETE_MEMO.SUCCESS: 
      return {
          ...state,
          memos: action.payload.filter(memo=>{
              return (!memo.deleted)
          }),
          deletedMemos: action.payload.filter((memo,idx,arr)=>{
            return (memo.deleted)
        })
      }

    case INIT_MEMO:
      let init_ater =  produce(state, draftState=>{
          draftState.memo = initialState.memo
        })
        return init_ater;
  
    case FETCH_MEMO_LIST.SUCCESS:
      return {
        ...state,
        memos: action.payload
      }
    case FETCH_DELETED_MEMO_LIST.SUCCESS:
      return {
        ...state,
        deletedMemos: action.payload
      }
    case FETCH_MEMO.SUCCESS:
      return {
        ...state,
        memo: {...action.payload}
      }
    case FETCH_DELETED_MEMO.SUCCESS:
      return {
        ...state,
        memo: action.payload
      }
    case ADD_MEMO.SUCCESS:
      return {
        ...state,
        memos: [...state.memos, action.payload]
      }
  
    case RESTORE_MEMO.SUCCESS:
      if (!action.payload) return state;
  
      return {
        ...state,
        memos: action.payload.filter(memo=>{
          return (!!memo.deleted === false)
        }),
        deletedMemos: action.payload.filter((memo,idx,arr)=>{
          return (!!memo.deleted === true)
       })
      };
    default: 
      return state
  }
}

export default memoReducer