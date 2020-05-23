import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import MainRoute from './route/mainRoute'
import Projects from './pages/admin/projects';
import AdminNav from './components/admin/adminNav';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/" component={MainRoute} />
      </Switch> */}

      <AdminNav />
      <Projects/>
    </div>
  );
}

export default App;
