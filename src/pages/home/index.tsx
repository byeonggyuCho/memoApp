import * as React from 'react';
import Home from '../../components/Home'
import Layout from '../../components/Layout';
import SidebarContiner  from '../../containers/MainSidebarContainer';

const HomePage = function () {
  

  return (
    <Layout>
      <SidebarContiner/>
      <Home/>
    </Layout>
  
  );
}

export default HomePage;