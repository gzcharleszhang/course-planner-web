import React from 'react';
import './App.css';
import Login from '../login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </div>
  
);

export default App;
