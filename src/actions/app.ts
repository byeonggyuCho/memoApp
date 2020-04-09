import {
    FetchMemoListAction, 
    AddMemoAction, 
    DeleteMemoAction,
} from './memo'
import { Toast, Dialog } from '../models';




export const CLEAR_API_CALL_STATUS = 'CLEAR_API_CALL_STATUS' as const

export const SHOW_TOAST = 'SHOW_TOAST'as const
export const ADD_TOAST = 'ADD_TOAST'as const
export const REMOVE_TOAST = 'REMOVE_TOAST'as const

export const SHOW_DIALOG = 'SHOW_DIALOG'as const
export const CONFIRM_DIALOG = 'CONFIRM_DIALOG'as const
export const CANCEL_DIALOG = 'CANCEL_DIALOG'as const



export interface ClearApiCallStatusAction {
    type: typeof CLEAR_API_CALL_STATUS
  }
  
  export interface ShowToastAction {
    type: typeof SHOW_TOAST,
    payload: string
  }
  
  export interface AddToastAction {
    type: typeof ADD_TOAST,
    payload: Toast
  }
  
  export interface RemoveToastAction {
    type: typeof REMOVE_TOAST,
    payload: number
  }
  
  export interface ShowDialolgAction {
    type: typeof SHOW_DIALOG,
    payload: Dialog
  }
  
  export interface ConfirmDialogAction {
    type: typeof CONFIRM_DIALOG
  }
  
  export interface CancelDialogAction {
    type: typeof CANCEL_DIALOG
  }
  
  




export const removeToast = (id: number): RemoveToastAction => ({
    type: REMOVE_TOAST,
    payload: id
    })

export const showDialog = (dialog: Dialog): ShowDialolgAction => ({
type: SHOW_DIALOG,
payload: dialog
})

export const confirmDialog = (): ConfirmDialogAction => ({
type: CONFIRM_DIALOG,
})

export const cancelDialog = (): CancelDialogAction => ({
type: CANCEL_DIALOG,
})

type AppActionTypes = ClearApiCallStatusAction
| FetchMemoListAction
| AddMemoAction
| DeleteMemoAction
| AddToastAction
| RemoveToastAction
| ShowDialolgAction
| ConfirmDialogAction
| CancelDialogAction



export  default AppActionTypes