import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer.js";
import Navigation from "./components/Navigation.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: "https://swapi.co/api/people/?page=2",
      prevPage: ""
    };
    this.loadNextPage = this.loadNextPage.bind(this);
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          nextPage: data.next,
          prevPage: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  loadNextPage() {
    this.getCharacters(this.state.nextPage);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardContainer characters={this.state.starwarsChars} />
        <Navigation next={this.loadNextPage} previous={this.state.prevPage} />
      </div>
    );
  }
}

export default App;

/*
character data ->  Main Container -> character
character -> Card
character data -> Navigation

*/
