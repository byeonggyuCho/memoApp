  
import {
  SHOW_DIALOG,
  CONFIRM_DIALOG,
  CANCEL_DIALOG, 
  ADD_TOAST, 
  REMOVE_TOAST, 
  CLEAR_API_CALL_STATUS, 
}from '../actions/app'
import {FETCH_MEMO_LIST, ADD_MEMO, DELETE_MEMO, }from '../actions/memo'
import AppActionTypes from '../actions/app'
import { Toast, Dialog } from '../models';

export interface AppState {
  apiCalling: boolean,
  toasts: Toast[],
  dialog?: Dialog,
}

const initialState: AppState = {
  apiCalling: false,
  toasts: [],
  dialog: undefined
}

const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  
  switch (action.type) {
    case FETCH_MEMO_LIST.REQUEST: 
    case ADD_MEMO.REQUEST: 
    case DELETE_MEMO.REQUEST: 
      return {
        ...state,
        apiCalling: true
      }
    case CLEAR_API_CALL_STATUS: 
      return {
        ...state,
        apiCalling: false
      }
    case ADD_TOAST: 
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      }
    case REMOVE_TOAST:
      const toastId = action.payload;
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== toastId)
      }
    case SHOW_DIALOG: 
      return {
        ...state,
        dialog: action.payload
      }
    case CONFIRM_DIALOG:
    case CANCEL_DIALOG:
      return {
        ...state,
        dialog: undefined
      }
    default: 
      return state
  }
}

export default appReducer