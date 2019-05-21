import React from "react";
import Card from "./Card.js";
import "./StarWars.css";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card characters={this.props.characters} />
      </div>
    );
  }
}

export default CardContainer;
