import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import SearchContainer from './SearchContainer'

class Home extends Component {
  constructor(){
    super();

    this.state = {
      gifs: [
        {
          "type": "gif",
          "id": "iuHaJ0D7macZq",
          "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
          "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
          "rating": "pg",
          "images": {
            "fixed_height": {
              "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
            }
          }
        },
        {
          "type": "gif",
          "id": "Z1kpfgtHmpWHS",
          "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
          "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
          "rating": "g",
          "images": {
            "fixed_height": {
              "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
            }
          }
        }
      ]
    }
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
