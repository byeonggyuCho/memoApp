import * as React from 'react';

import Main from './common/Main';
import AddMemoBtn from '../components/AddMenuButton';

// interface Props {
//   memos: Memo[]
//   deletedMemos: Memo[] 
// }

const Home = function () {
  // const { memos, deletedMemos } = props


  return (
      <Main>
        <div style={{ margin: '10px' }}>  
          <AddMemoBtn />  
        </div>
      </Main>
  );
}

export default Home;