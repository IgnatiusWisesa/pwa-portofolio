import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import AdminNav from './components/admin/adminNav';
import MyPage from './pages/admin/myPage';
import Modals from './components/admin/modals';
import LoginPage from './pages/admin/loginPage';

function App() {
  return (
    <div className="App">
      <AdminNav/>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/myPage" component={MyPage} />
        <Redirect from="/" to="/login" />
      </Switch>
      <Modals />
    </div>
  );
}

export default App;
