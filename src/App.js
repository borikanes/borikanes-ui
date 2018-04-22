import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage.js';
import BoriNavbar from './BoriNavbar.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <header className="App-header">
                < BoriNavbar />
            </header>
            <Route exact path="/" component={HomePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
