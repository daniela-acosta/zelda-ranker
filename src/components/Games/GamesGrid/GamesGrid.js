import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

import styles from "./GamesGrid.module.css";
import {
  getLikes,
  getUserVotes,
  getDislikes,
  getRankings,
  getVoteStates,
} from "../../../helpers/rankingHelpers";
import GameCard from "./GameCard/GameCard";

const GamesGrid = (props) => {
  let history = useHistory();
  const [liked, setLiked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [disliked, setDisliked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // const userVotes = useCallback(() => getUserVotes(props.games), [props.games]);
  const userVotes = getUserVotes(props.games);
  const likes = getLikes(props.games, userVotes);
  const dislikes = getDislikes(props.games, userVotes);
  const [rankings, likePercentage] = getRankings(props.games, likes, dislikes);

  console.log(rankings);

  useEffect(() => {
    setLiked(getVoteStates(userVotes)[0]);
    setDisliked(getVoteStates(userVotes)[1]);
  }, []);

  console.log(liked, disliked);

  const handleClickLike = (gameId) => {
    setLiked((prevState) => {
      const copyOfLiked = [...liked];
      const newValue = !prevState[gameId];
      copyOfLiked[gameId] = newValue;
      return copyOfLiked;
    });

    if (disliked[gameId]) {
      const copyOfDisliked = [...disliked];
      setDisliked((prevState) => {
        const newValue = !prevState[gameId];
        copyOfDisliked[gameId] = newValue;
        return copyOfDisliked;
      });
      localStorage.setItem(gameId, "liked");
    } else if (liked[gameId]) {
      localStorage.setItem(gameId, "none");
    } else {
      localStorage.setItem(gameId, "liked");
    }
  };

  const handleClickDislike = (gameId) => {
    setDisliked((prevState) => {
      const copyOfDisliked = [...disliked];
      const newValue = !prevState[gameId];
      copyOfDisliked[gameId] = newValue;
      return copyOfDisliked;
    });

    if (liked[gameId]) {
      const copyOfLiked = [...liked];
      setLiked((prevState) => {
        const newValue = !prevState[gameId];
        copyOfLiked[gameId] = newValue;
        return copyOfLiked;
      });
      localStorage.setItem(gameId, "disliked");
    } else if (disliked[gameId]) {
      localStorage.setItem(gameId, "none");
    } else {
      localStorage.setItem(gameId, "disliked");
    }
  };

  const handleClickView = (id) => {
    history.push("/" + id);
  };

  let component = null;

  if (props.show) {
    component = (
      <div className={styles.GamesGrid}>
        {props.games.map((game) => {
          
          return (
            <GameCard
              key={game.id}
              game={game}
              likePercentage={likePercentage[game.id]}
              rank={rankings[game.id]}
              likes={likes[game.id]}
              dislikes={dislikes[game.id]}
              clickedView={() => handleClickView(game.id)}
              liked={liked[game.id]}
              disliked={disliked[game.id]}
              clickedLike={() => handleClickLike(game.id)}
              clickedDislike={() => handleClickDislike(game.id)}
              order={rankings[game.id]}
              
            />
          );
        })}
      </div>
    );
  }

  return component;
};

export default GamesGrid;
