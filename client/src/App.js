import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <AppNavbar/>
      </div>
    );
  }
}

export default App;
