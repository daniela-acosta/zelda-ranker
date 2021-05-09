import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./GamesTable.module.css";
import GameRow from "./GameRow/GameRow";

const GamesTable = (props) => {
  let history = useHistory();

  const handleClick = (id) => {
    history.push("/" + id);
  };

  let component = null;

  if (props.show) {
    component = (
      <table className={styles.GamesTable}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Like</th>
            <th>Image</th>
            <th>Name</th>
            <th>Year</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {props.games.map((game) => (
            <GameRow key={game.id} game={game} clicked={handleClick} />
          ))}
        </tbody>
      </table>
    );
  }

  return component;
};

export default GamesTable;
