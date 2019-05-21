import React from "react";
import Dog from "./components/Dog.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: {}
    };
  }

  componentDidMount() {
    this.getDogs("https://dog.ceo/api/breeds/list/all");
  }

  getDogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          dogs: data.message
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  dogBreeds = () => {
    return Object.keys(this.state.dogs);
  };

  render() {
    const breeds = Object.keys(this.state.dogs);
    return (
      <ul>
        {breeds.map(x=>{
        return <Dog breed={x} />
      })};
      </ul>
      )
  }
}

export default App;
