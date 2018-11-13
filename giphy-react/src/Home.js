import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';

class Home extends Component {

handleTermChange(term) {
  console.log(term); {
  }

}

  render() {
    return (
      <div className="App">
          < Search onTermChange={this.handleTermChange} />
      </div>
    );
    }
}

export default Home;
