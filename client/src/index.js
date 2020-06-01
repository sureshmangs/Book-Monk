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
import Cart from './components/Cart';
import AuthGuard from './components/HOCs/AuthGuard';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Success from './components/Success';
import Failure from './components/Failure';
import SearchBooks from './components/SearchBooks';
import SearchBooksInfo from './components/SearchBooksInfo';

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
          <Route exact path="/searchbooks/:searchData" component={SearchBooks} />
          <Route exact path="/searchbooks/book/:id" component={SearchBooksInfo} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/user_profile" component={AuthGuard(Profile)} />
          <Route exact path="/edit_profile/:id" component={AuthGuard(EditProfile)} />
          <Route exact path="/payment_success" component={AuthGuard(Success)} />
          <Route exact path="/payment_failure" component={AuthGuard(Failure)} />
          <Route exact path="/notfound" component={NotFound} />
        </App>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();