import React from 'react';
import './App.css';
import AdminNav from './components/admin/adminNav';
import MyPage from './pages/admin/myPage';
import Modals from './components/admin/modals';
import LoginPage from './pages/admin/loginPage';

function App() {
  return (
    <div className="App">
      {/* <AdminNav/>
      <MyPage />
      <Modals /> */}
      <LoginPage />
    </div>
  );
}

export default App;
