import React from 'react';
import { Switch, Route } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import SingleJoke from './components/SingleJoke';
import TenJokes from './components/TenJokes';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/jokes">
        <TenJokes />
      </Route>
      <Route path="/">
        <SingleJoke/>
      </Route>
    </Switch>
      
    </div>
  );
}

export default App;
