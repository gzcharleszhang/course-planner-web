import React from 'react';
import './App.css';
import Login from '../login/Login';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
