
import * as React from 'react';
import { Switch,  Route, withRouter } from 'react-router-dom';
import {useRouteMatch} from 'react-router'
import AddMemoPage from '../../pages/memo/AddMemoPage'
import MemoPage from '../../pages/memo/MemoPage'

const MemoRouter = () => {
  const { url } = useRouteMatch();
  
  return (
    <Switch>
      <Route path={`${url}/add`} exact component={AddMemoPage} />
      <Route path={`${url}/:id`} exact component={MemoPage} />
    </Switch>
  )
}

export default MemoRouter