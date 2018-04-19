import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={HomePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
