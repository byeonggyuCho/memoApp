  
import { combineReducers } from 'redux';
import memo, { MemoState } from './memo'
import app, {AppState} from './app'

export interface RootState {
  memo: MemoState
  app : AppState
}

const rootReducer = combineReducers({
  memo,
  app
})

export default rootReducer