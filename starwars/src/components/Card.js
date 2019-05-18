import React from "react";

function Card(props) {
  let characters = () => {
    return props.characters.map(x => {
      return <li className="character">{x.name}</li>;
    });
  };

  return (
    <div>
      <ol>{characters()}</ol>
    </div>
  );
}

export default Card;
