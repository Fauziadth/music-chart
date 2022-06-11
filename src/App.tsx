import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './styles/App.css';
import Home from './pages/Home/Home';

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path={`/`} element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
