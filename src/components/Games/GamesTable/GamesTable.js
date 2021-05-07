import React from "react";
import {useHistory} from "react-router-dom";

const GamesTable = (props) => {
let history = useHistory();

  const handleClick = (id) => {
    history.push("/" + id);
  };

  let component = null;

  if (props.show) {
    component = (
      <ol>
        {props.games.map((game) => (
          <li key={game.id} onClick={() => handleClick(game.id)}>
            {game.name}
          </li>
        ))}
      </ol>
    );
  }

  return component;
};

export default GamesTable;
