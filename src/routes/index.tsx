import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import HomeContainer from '../containers/HomeContainer';
import MemoListContainer from '../containers/MemoListContainer';
import DeletedMemoListContainer from '../containers/DeletedMemoListContainer';
import { history } from '../store/configureStore';

const Root: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={HomeContainer} exact />
      <Route path="/memo" component={MemoListContainer} />
      <Route path="/trash" component={DeletedMemoListContainer} />
      <Redirect path="*" to="/" />
    </Switch>
   
  </ConnectedRouter>
)

export default Root;