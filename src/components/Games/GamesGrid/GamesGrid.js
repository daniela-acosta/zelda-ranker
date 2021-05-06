import React from "react";
import {useHistory} from "react-router-dom";

const GamesGrid = (props) => {
console.log(props)
let history = useHistory();

  const handleClick = (id) => {
    history.push("/" + id);
  };

  let component = null;

  if (props.show) {
    component = (
      <ul>
        {props.games.map((game) => (
          <li key={game.id} onClick={() => handleClick(game.id)}>
            {game.name}
          </li>
        ))}
      </ul>
    );
  }

  return component;
};

export default GamesGrid;