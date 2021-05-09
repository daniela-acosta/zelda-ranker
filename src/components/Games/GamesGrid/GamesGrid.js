import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./GamesGrid.module.css";
import GameCard from "./GameCard/GameCard";

const GamesGrid = (props) => {
  let history = useHistory();

  const handleClick = (id) => {
    history.push("/" + id);
  };

  let component = null;

  if (props.show) {
    component = (
      <div className={styles.GamesGrid}>
        {props.games.map((game) => (
          <GameCard key={game.id} game={game} clicked={() => handleClick(game.id)} voted={game.voted}/>
        ))}
      </div>
    );
  }

  return component;
};

export default GamesGrid;
