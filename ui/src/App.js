import React from 'react';
import './App.css';
import AdminNav from './components/admin/adminNav';
import MyPage from './pages/admin/myPage';

function App() {
  return (
    <div className="App">
      <AdminNav/>
      <MyPage />
    </div>
  );
}

export default App;
