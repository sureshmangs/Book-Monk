import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.css';
import App from './App';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import BookContainer from './components/BookContainer';
import Book from './components/Book';


import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/bookcontainer" component={BookContainer} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/notfound" component={NotFound} />
      </App>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();