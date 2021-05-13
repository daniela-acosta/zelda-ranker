import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import styles from "./GameDetail.module.css";
import gamesData from "../../data/data";
import VoteSection from "../../components/Games/VoteSection/VoteSection";
import Reviews from "../../components/Games/Game/Reviews/Reviews";

const GameDetail = (props) => {
  let history = useHistory();
  const [currentGame, setCurrentGame] = useState(null);

  // extracts game id from path, finds game data and sets state with it
  useEffect(() => {
    const id = history.location.pathname.split("/")[1];
    const foundGame = gamesData.find((game) => game.id.toString() === id);
    setCurrentGame(foundGame);
  }, [history.location.pathname]);

  console.log(props);

  let component = null;

  if (currentGame) {
    const gameName = currentGame.name
      .replace(/\s/g, "")
      .replace("'", "")
      .toLowerCase();

    const image = require("../../images/" + gameName + ".jpg").default;

    component = (
      <div className={styles.GameDetail}>
        <section className={styles.Information}>
          <div className={styles.First}>
            <h2>#{props.rank}</h2>
          </div>
          <div className={styles.Second}>
            <img src={image} alt="game" />
            <VoteSection
              game={props.game}
              liked={props.liked}
              disliked={props.disliked}
              likes={props.likes}
              dislikes={props.dislikes}
              clickedLike={props.clickedLike}
              clickedDislike={props.clickedDislike}
            />
          </div>
          <div className={styles.Third}>
            <h1>{currentGame.name}</h1>
            <p>
              <span>{Math.round(props.likePercentage * 100)}% </span>
              of voters like this game
            </p>
            <h4>Description</h4>
            <p>{currentGame.description}</p>
          </div>
        </section>
        <Reviews gameId={currentGame.id} />
      </div>
    );
  }
  return component;
};

export default GameDetail;
