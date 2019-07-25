import React from 'react';
import Login from '../login/login.container'
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
