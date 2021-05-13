import React, { useState, useEffect, useCallback } from "react";
import { Route, useHistory } from "react-router-dom";

import styles from "./Games.module.css";
import {
  getLikes,
  getUserVotes,
  getDislikes,
  getRankings,
  getVoteStates,
} from "../../helpers/rankingHelpers";
import data from "../../data/data";
import GameCard from "../../components/Games/GamesGrid/GameCard/GameCard";
import GameRow from "../../components/Games/GamesTable/GameRow/GameRow";
import Button from "../../components/UI/Button/Button";
import GameDetail from "../../views/GameDetail/GameDetail";

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

  // const initialUserVotes = useCallback(() => getUserVotes(data), []);
  const userVotes = getUserVotes(props.games);
  const likes = getLikes(props.games, userVotes);
  const dislikes = getDislikes(props.games, userVotes);
  const [rankings, likePercentage] = getRankings(props.games, likes, dislikes);

  useEffect(() => {
    setLiked(getVoteStates(userVotes)[0]);
    setDisliked(getVoteStates(userVotes)[1]);
    alert("change")
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

  let component = null;
  let text;
  let path = history.location.pathname;
  let pathId = history.location.pathname.split("/")[1];

  if (path === "/") {
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
      component = (
        <div className={styles.GamesTable}>
          <table>
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
  }

  let button = null;
  if (path === "/") {
    button = <Button clicked={() => handleToggleDisplay()} text={text} />;
  }

  console.log("HEREEEEE", pathId)
  return (
    <div className={styles.Games}>
      <div className={styles.Wrapper}>{button}</div>
      {component}
      <Route>
        <GameDetail
          exact
          path="/:id"
          likePercentage={likePercentage[pathId]}
          rank={rankings[pathId]}
          likes={likes[pathId]}
          dislikes={dislikes[pathId]}
          liked={liked[pathId]}
          disliked={disliked[pathId]}
          clickedLike={() => handleClickLike(pathId)}
          clickedDislike={() => handleClickDislike(pathId)}
        />
      </Route>
    </div>
  );
};

export default Games;
