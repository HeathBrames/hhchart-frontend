import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ChartPage } from './components/chart-page/ChartPage';
import { LoginPage } from './components/login-page/LoginPage';
import NavigationBar from './components/navigation-bar/NavigationBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="routerContainer">
      <Router>
        <NavigationBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <ChartPage currentUser={currentUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;
