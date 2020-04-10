import * as React from 'react';
import { Switch, useRouteMatch,  Route,  withRouter } from 'react-router-dom';
import DeletedMemoContainer from '../../containers/DeletedMemo';


const TrashRouter = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/:id`} exact component={DeletedMemoContainer} />
      <Route path={`${url}/`} exact component={() => <div>휴지통이 비었습니다.</div>} />
    </Switch>
  )
}

export default withRouter(TrashRouter);