import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import HomePage from '../pages/home';
import DeletedMemoListContainer from '../containers/DeletedMemoListContainer';
import { history } from '../store/configureStore';
import MemoListPage from '../pages/memo/MemoListPage'
import DeletedMemoListPage from '../pages/trash/DeletedMemoList'

const Root: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/memo" component={MemoListPage} />
      <Route path="/trash" component={DeletedMemoListPage} />
      <Redirect path="*" to="/" />
    </Switch>
   
  </ConnectedRouter>
)

export default Root;