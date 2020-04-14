import * as React from 'react';
import MemoContents from '../../components/MemoContents'
import SidebarContainer from '../../containers/MemoSidebarContainer'
import Layout from '../../components/Layout'


const MemoListPage = () => {

  return (
    
    <Layout>
        <SidebarContainer />
        <MemoContents/>
    </Layout>
  );
}

export default MemoListPage
