import {Memo} from '../models'

export const INIT_MEMO = 'INIT_MEMO' as const


export const FETCH_MEMO_LIST = {
  REQUEST : 'FETCH_MEMO_LIST_REQUEST',
  SUCCESS : 'FETCH_MEMO_LIST_SUCCESS',
  FAILURE : 'FETCH_MEMO_LIST_FAILURE',
} as const


export const FETCH_DELETED_MEMO_LIST = {
  REQUEST : 'FETCH_DELETED_MEMO_LIST_REQUEST',
  SUCCESS : 'FETCH_DELETED_MEMO_LIST_SUCCESS',
  FAILURE : 'FETCH_DELETED_MEMO_LIST_FAILURE',
}  as const




export const FETCH_MEMO = {
  REQUEST : 'FETCH_MEMO_REQUEST',
  SUCCESS : 'FETCH_MEMO_SUCCESS',
  FAILURE : 'FETCH_MEMO_FAILURE',
}  as const


export const FETCH_DELETED_MEMO = {
  REQUEST : 'FETCH_DELETED_MEMO_REQUEST',
  SUCCESS : 'FETCH_DELETED_MEMO_SUCCESS',
  FAILURE : 'FETCH_DELETED_MEMO_FAILURE',
}  as const


export const ADD_MEMO = {
  REQUEST : 'ADD_MEMO_REQUEST',
  SUCCESS : 'ADD_MEMO_SUCCESS',
  FAILURE : 'ADD_MEMO_FAILURE',
}  as const


export const DELETE_MEMO = {
  REQUEST : 'DELETE_MEMO_REQUEST',
  SUCCESS : 'DELETE_MEMO_SUCCESS',
  FAILURE : 'DELETE_MEMO_FAILURE',
}  as const



export const RESTORE_MEMO = {
  REQUEST : 'RESTORE_MEMO_REQUEST',
  SUCCESS : 'RESTORE_MEMO_SUCCESS',
  FAILURE : 'RESTORE_MEMO_FAILURE',
} as const




export interface FetchMemoListAction {
  type: typeof FETCH_MEMO_LIST.REQUEST
}

export interface FetchMemoListSuccessAction {
  type: typeof FETCH_MEMO_LIST.SUCCESS
  payload: Memo[]
}

export interface FetchDeletedMemoListAction {
  type: typeof FETCH_DELETED_MEMO_LIST.REQUEST
}

export interface FetchDeletedMemoListSuccessAction {
  type: typeof FETCH_DELETED_MEMO_LIST.SUCCESS
  payload: Memo[]
}

export interface FetchMemoAction {
  type: typeof FETCH_MEMO.REQUEST
  payload: number
}

export interface FetchMemoSuccessAction {
  type: typeof FETCH_MEMO.SUCCESS
  payload: Memo
}

export interface FetchDeletedMemoAction {
  type: typeof FETCH_DELETED_MEMO.REQUEST,
  payload: number
}

export interface FetchDeletedMemoSuccessAction {
  type: typeof FETCH_DELETED_MEMO.SUCCESS
  payload: Memo
}
//FetchMemoListSuccessAction | AddMemoSuccessAction | DeleteMemoSuccessAction
export interface AddMemoAction {
  type: typeof ADD_MEMO.REQUEST
  payload: Memo
}

export interface AddMemoSuccessAction {
  type: typeof ADD_MEMO.SUCCESS,
  payload: Memo
}

export interface DeleteMemoAction {
  type: typeof DELETE_MEMO.REQUEST
  payload: number
}

export interface DeleteMemoSuccessAction {
  type: typeof DELETE_MEMO.SUCCESS,
  payload: Memo[]
}

export interface RestoreMemoAction {
  type: typeof RESTORE_MEMO.REQUEST
  payload: number
}

export interface ResotreMemoSuccessAction {
  type: typeof RESTORE_MEMO.SUCCESS,
  payload: Memo[]
}

export interface IniteMemoAction {
  type: typeof INIT_MEMO
}



export const fetchMemoList = (): FetchMemoListAction => ({
  type: FETCH_MEMO_LIST.REQUEST,
})

export const fetchDeletedMemoList = (): FetchDeletedMemoListAction => ({
  type: FETCH_DELETED_MEMO_LIST.REQUEST,
})

export const fetchMemo = (id: number): FetchMemoAction => ({
  type: FETCH_MEMO.REQUEST,
  payload: id
})


// 휴지통에서 삭제된메모 개별조회.
export const fetchDeletedMemo = (id: number): FetchDeletedMemoAction => ({
  type: FETCH_DELETED_MEMO.REQUEST,
  payload: id
})

export const addMemo = (memo: Memo): AddMemoAction => ({
  type: ADD_MEMO.REQUEST,
  payload: memo
})

export const deleteMemo = (id: number): DeleteMemoAction => ({
  type: DELETE_MEMO.REQUEST,
  payload: id
})

export const restoreMemo = (id: number): RestoreMemoAction => ({
  type: RESTORE_MEMO.REQUEST,
  payload: id
})

export const initMemo = ():IniteMemoAction =>({
  type: INIT_MEMO
})



type MemoActionTypes = FetchMemoListSuccessAction 
  | FetchDeletedMemoListSuccessAction
  | FetchMemoSuccessAction
  | FetchDeletedMemoSuccessAction
  | AddMemoSuccessAction
  | DeleteMemoSuccessAction
  | ResotreMemoSuccessAction
  | IniteMemoAction


export default MemoActionTypes;