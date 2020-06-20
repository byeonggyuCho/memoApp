
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom'
import MemoPage from '../../pages/memo/MemoPage'
import EditMemoPage from '../../pages/memo/EditMemoPage'
import MemoViewPage from '../../pages/memo/MemoViewPage'

const MemoRouter = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/add`} exact component={MemoPage} />
      <Route path={`${url}/edit/:id`} exact component={EditMemoPage} />
      <Route path={`${url}/:id`} exact component={MemoViewPage} />
    </Switch>
  )
}

export default MemoRouter