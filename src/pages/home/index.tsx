import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuButton';
import { List, ListItem } from '../../components/List';
import { Memo } from '../../models';

interface Props {
  memos: Memo[]
  deletedMemos: Memo[] 
}

const HomePage: React.FC<Props> = props => {
  const { memos, deletedMemos } = props


  // 메뉴 자동화.
  const list = [
    {to:'/meme', label:'메모', length: memos.length},
    {to:'/trash',  label:'휴지통' , length: deletedMemos.length},
  ]

  const listItem = list.map((item,index)=>(
    <ListItem first = {index==0}>
      <Link to={item.to}> 
        {item.label} ({item.length})
      </Link>
    </ListItem>
  ))
  
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>폴더</SidebarTitle>
        <List>
          {listItem}
        </List>
      </Sidebar>
      <Main>
        <div style={{
          margin: '10px'
        }}><AddMemoBtn /></div>
      </Main>
    </Layout>
  );
}

export default HomePage;