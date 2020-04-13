import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import { Memo } from '../../models';
import TrashRouter from '../../routes/trash';

interface Props {
  memos: Memo[]
}


const DeletedMemoListPage = ({memos}:Props) => {

  
  const list = memos.map((memo)=>({
    to : `/memo/${memo.id}`,
    title : memo.content
  }))

  return (
    <Layout>
      <Sidebar to="/" title="휴지통" list={list}/>
      <Main>
        <div style={{ margin: '10px' }}>
          <TrashRouter />
        </div>
      </Main>
    </Layout>
  );
}

export default DeletedMemoListPage;

// const DeletedMemoList = ( props:Props) => {
//   const {memos} = props;
  
//   const memoTitle = (content: string): string => 
//     content.substr(0, 15);

//   return (
//     <List>
//       {memos.map((memo, idx) =>
//         <ListItem key={idx} first={idx === 0}>
//           <Link to={`/trash/${memo.id}`}>
//             {memoTitle(memo.content)}
//           </Link>
//         </ListItem>
//       )}
//     </List>
//   )
// }
