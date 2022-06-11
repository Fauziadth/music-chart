import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './styles/App.css';
import Home from './pages/Home/Home';
import Header from './component/Header/HeaderNav';
import { Layout } from 'antd';
import SearchPage from './pages/SearchPage/SearchPage';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="App" style={{minHeight:"100vh"}}>
      <Header />

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/search`} element={<SearchPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
