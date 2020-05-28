import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/authAction';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default connect(null, actions)(App);
