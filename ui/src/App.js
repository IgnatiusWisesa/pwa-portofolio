import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import MainRoute from './route/mainRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={MainRoute} />
      </Switch>
    </div>
  );
}

export default App;
