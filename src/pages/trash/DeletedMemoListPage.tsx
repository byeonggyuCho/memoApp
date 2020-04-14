import * as React from 'react';
import Layout from '../../components/Layout';
import SidebarContainer from '../../containers/MemoSidebarContainer';
import DeletedMemoList from '../../components/DeleteMemoList'



const DeletedMemoListPage = () => {

  return (
    <Layout>
      <SidebarContainer/>
      <DeletedMemoList/>
    </Layout>
  );
}

export default DeletedMemoListPage;
