import React from "react";

function Card(props) {
  let characters = () => {
    return props.characters.map(x => {
      return (
        <li className="character">
          {x.name} - Born: {x.birth_year}
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{characters()}</ul>
    </div>
  );
}

export default Card;
