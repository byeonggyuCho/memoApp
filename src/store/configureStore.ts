import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';
import { createBrowserHistory } from "history";
import { routerMiddleware as routerMiddlewareCreator } from "connected-react-router";


export const history = createBrowserHistory()
const routerMiddleware =  routerMiddlewareCreator(history);
const loggerMiddleware = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        loggerMiddleware,
        routerMiddleware
      ),
    ),
  )

  sagaMiddleware.run(rootSaga);
  
  return store
}

export default configureStore