import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Root from './routes';
import configureStore from './store/configureStore'
import DialogContainer from './containers/DialogContainer'

const store = configureStore();

// Provider : 어플리케이션에 사용된 모든 컴포넌트에서 스토어에 접근하기 위해서 생성된 스터로를 루트 컴포넌트에 주입하는 과정.
// 그 결과 하위 모든 컴포넌트에서는 connect() 함수를 통해 스토어에 접근할 수 있다.

ReactDOM.render(
  <Provider store={store}>
     <DialogContainer/>
    <Root />, 
  </Provider>,
  document.getElementById('app')
);