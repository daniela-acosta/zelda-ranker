import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Games.module.css";
import {
  getLikes,
  getUserVotes,
  getDislikes,
  getRankings,
  getVoteStates,
} from "../../helpers/rankingHelpers";
import GameCard from "../../components/Games/GamesGrid/GameCard/GameCard";
import GameRow from "../../components/Games/GamesTable/GameRow/GameRow";
import Button from "../../components/UI/Button/Button";

const Games = (props) => {
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

  const [displayGrid, setDisplayGrid] = useState(true);

  // const userVotes = useCallback(() => getUserVotes(props.games), [props.games]);
  const userVotes = getUserVotes(props.games);
  const likes = getLikes(props.games, userVotes);
  const dislikes = getDislikes(props.games, userVotes);
  const [rankings, likePercentage] = getRankings(props.games, likes, dislikes);

  useEffect(() => {
    setLiked(getVoteStates(userVotes)[0]);
    setDisliked(getVoteStates(userVotes)[1]);
  }, []);

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

  const handleToggleDisplay = () => {
    setDisplayGrid((prevState) => !prevState);
  };

  let component = <h1>loading...</h1>;
  let text;

  if (displayGrid) {
    text = "View as table";
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
  } else {
    text = "View as grid";
    // console.log(props.games)
    component = (
      <div className={styles.GamesTable}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Image</th>
              <th>Vote</th>
              <th>Name</th>
              <th>Year</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {props.games.map((game) => (
              <GameRow
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
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={styles.Games}>
      <Button clicked={() => handleToggleDisplay()} text={text} />
      {component}
    </div>
  );
};

export default Games;
