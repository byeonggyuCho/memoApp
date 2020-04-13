import React from 'react'
import Layout from '../components/Layout';
import Sidebar  from '../components/Sidebar';
import Main from '../components/Main';
import AddMemoBtn from '../components/AddMenuButton';
import MemoRouter from '../routes/memo';
import { Memo } from '../models';

interface Props {
    memos: Memo[]
    hasAddMemoBtn: boolean
    apiCalling: boolean
  }
  
  


const MemoList = function(props:Props){
    const { memos, apiCalling, hasAddMemoBtn } = props;
    // const hasMemos = memos.length > 0;
    const list = memos.map((memo)=>({
      to : `/memo/${memo.id}`,
      title : memo.content
    }))


    return (
    //  <Layout>
    //     <Sidebar to="/" title = "메모" list = {list} apiCalling={apiCalling}/>
        <Main>
          <div style={{ margin: '10px' }}>
            {hasAddMemoBtn && <AddMemoBtn />}
            <MemoRouter />
          </div>
        </Main>
      // </Layout>
    )
}


export default MemoList;