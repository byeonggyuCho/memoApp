  
import { combineReducers } from 'redux';
import memo, { MemoState } from './memo'
import app, {AppState} from './app'
import { connectRouter } from 'connected-react-router'
import { History } from "history";

export interface RootState {
  memo: MemoState
  app : AppState
}


const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  memo,
  app
})


export default createRootReducer