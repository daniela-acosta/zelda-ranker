import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./GamesGrid.module.css";
import {
  getLikes,
  getUserVotes,
  getDislikes,
  getRankings,
} from "../../../helpers/rankingHelpers";
import GameCard from "./GameCard/GameCard";

const GamesGrid = (props) => {
  let history = useHistory();

  const handleClick = (id) => {
    history.push("/" + id);
  };

  const userVotes = getUserVotes(props.games);
  const likes = getLikes(props.games, userVotes);
  const dislikes = getDislikes(props.games, userVotes);
  const [rankings, likePercentage] = getRankings(props.games, likes, dislikes);

  let component = null;

  if (props.show) {
    component = (
      <div className={styles.GamesGrid}>
        {props.games.map((game) => {
          console.log(likes[game.id], dislikes[game.id])
          const voteState = localStorage.getItem(game.id.toString());
          return (
            <GameCard
              key={game.id}
              game={game}
              clicked={() => handleClick(game.id)}
              voteState={voteState}
              likePercentage={likePercentage[game.id]}
              rank={rankings[game.id]}
              likes={likes[game.id]}
              dislikes={dislikes[game.id]}
            />
          );
        })}
      </div>
    );
  }

  // console.log("User Votes", userVotes);
  // console.log("Likes", likes);
  // console.log("Dislikes", dislikes);
  // console.log("Proportions and rangings", likePercentage, rankings);

  return component;
};

export default GamesGrid;
