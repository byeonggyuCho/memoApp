import * as React from 'react';
import MemoListContainer from '../../containers/MemoListContainer'
import SidebarContainer from '../../containers/MemoSidebarContainer'
import Layout from '../../components/Layout'


const MemoListPage = () => {

  return (
    
    <Layout>
        <SidebarContainer />
        <MemoListContainer/>
    </Layout>
  );
}

export default MemoListPage
