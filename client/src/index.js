import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';


import './index.css';
import App from './App';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import BookContainer from './components/BookContainer';
import Book from './components/Book';


import * as serviceWorker from './serviceWorker';

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <App>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/bookcontainer" component={BookContainer} />
          <Route exact path="/book/:id" component={Book} />
          <Route exact path="/notfound" component={NotFound} />
        </App>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();