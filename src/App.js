import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ChartPage } from './components/chart-page/ChartPage';
import { LoginPage } from './components/login-page/LoginPage';
import NavigationBar from './components/navigation-bar/NavigationBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/login">
          <NavigationBar isLoggedIn = 'false'/>
          <LoginPage />
        </Route>
        <Route path="/">
          <NavigationBar isLoggedIn = 'true'/>
          <ChartPage />
        </Route>
      </Switch>
    </Router>
  </div>  
);

export default App;
