import * as React from 'react';
import Layout from '../../components/Layout';
import MemoSidebarContainer from '../../containers/MemoSidebarContainer';
import DeletedMemoList from '../../components/DeleteMemoList'



const DeletedMemoListPage = () => {

  return (
    <Layout>
      <MemoSidebarContainer/>
      <DeletedMemoList/>
    </Layout>
  );
}

export default DeletedMemoListPage;
