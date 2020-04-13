
import * as React from 'react';
import { Switch,  Route, withRouter } from 'react-router-dom';
import {useRouteMatch} from 'react-router'
import MemoContainer from '../../containers/MemoContainer'
import AddMemoContainer from '../../containers/AddMemoContainer'

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