import * as React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import DeletedMemoContainer from '../../containers/DeletedMemoContainer';


const TrashRouter = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/:id`} exact component={DeletedMemoContainer} />
      <Route path={`${url}/`} exact component={() => <div></div>} />
    </Switch>
  )
}

export default TrashRouter