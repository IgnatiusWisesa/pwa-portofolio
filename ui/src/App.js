import React from 'react';
import './App.css';
import AdminNav from './components/admin/adminNav';
import MyPage from './pages/admin/myPage';
import Modals from './components/admin/modals';

function App() {
  return (
    <div className="App">
      <AdminNav/>
      <MyPage />
      <Modals />
    </div>
  );
}

export default App;
