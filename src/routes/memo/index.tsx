
import * as React from 'react';
import { Switch, RouteComponentProps, Route, withRouter } from 'react-router-dom';
import {useRouteMatch} from 'react-router'
import MemoContainer from '../../containers/Memo'
import AddMemoContainer from '../../containers/AddMemo'

const MemoRouter = () => {
  const { url } = useRouteMatch();
  
  return (
    <Switch>
      <Route path={`${url}/add`} exact component={AddMemoContainer} />
      <Route path={`${url}/:id`} exact component={MemoContainer} />
    </Switch>
  )
}

export default withRouter(MemoRouter);