import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import SearchContainer from './SearchContainer'

class Home extends Component {
  constructor(){
    super();

    this.state = {
      gifs: []
  };
}

handleTermChange = async (term) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=2rIWz3Iud2RuGJVSjAYlbPZJ7SEcYaM2`;
  const result = await fetch(url);
  const parsed = await result.json();
  console.log(parsed); 
  this.setState({gifs: parsed.data});
  

}

  render() {
    return (
      <div className="App">
          <h1>SEARCH</h1>
          < SearchContainer onTermChange={this.handleTermChange} />
          < Search gifs={this.state.gifs} />
      </div>
    );
  }
}

export default Home;
