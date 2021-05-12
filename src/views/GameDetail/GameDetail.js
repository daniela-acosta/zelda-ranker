import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import styles from "./GameDetail.module.css";
import gamesData from "../../data/data";
import Spinner from "../../components/UI/Loading/Loading";
// import VoteSection from "../../components/Games/VoteSection/VoteSection";
import Reviews from "../../components/Games/Game/Reviews/Reviews";

const GameDetail = (props) => {
  let history = useHistory();
  const [currentGame, setCurrentGame] = useState(null);

  // extracts game id from path, finds game data and sets state with it
  useEffect(() => {
    const id = history.location.pathname.split("/")[1];
    const foundGame = gamesData.find((game) => game.id.toString() === id);
    setCurrentGame(foundGame);
  }, [history]);

  let component = <Spinner />;

  if (currentGame) {
    const gameName = currentGame.name
      .replace(/\s/g, "")
      .replace("'", "")
      .toLowerCase();

    const image = require("../../images/" + gameName + ".jpg").default;

    component = (
      <div className={styles.GameDetail}>
        <section className={styles.Information}>
          <div className={styles.Title}>
            <h2>Rank:</h2>
            <h2>6</h2>
          </div>
          <div>
            <img src={image} alt="game" />
            {/* <VoteSection/> */}
            <p>vote section</p>
            <p>vote things</p>
            <p>votes</p>
          </div>
          <div>
            <h1>{currentGame.name}</h1>
            <p>75% likes</p>
            <h4>Description</h4>
            <p>{currentGame.description}</p>
          </div>
        </section>
        <Reviews />
      </div>
    );
  }
  return component;
};

export default GameDetail;
