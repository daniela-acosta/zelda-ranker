import React from "react";

import styles from "./GameCard.module.css";
import VoteSection from "../../VoteSection/VoteSection";
import Button from "../../../UI/Button/Button";

const GameCard = (props) => {
  const gameName = props.game.name
    .replace(/\s/g, "")
    .replace("'", "")
    .toLowerCase();
  const image = require("../../../../images/" + gameName + ".jpg").default;
  // console.log("[GAME CARD]", props);
  return (
    <div
      className={`${styles.GameCard} ${props.rank === 1 && styles.first} ${
        props.rank === 2 && styles.second
      } ${props.rank === 3 && styles.third} ${
        props.rank === 4 && styles.fourth
      } ${props.rank === 5 && styles.fifth} ${
        props.rank === 6 && styles.sixth
      } ${props.rank === 7 && styles.seventh} ${
        props.rank === 8 && styles.eighth
      } ${props.rank === 9 && styles.ninth} ${
        props.rank === 10 && styles.tenth
      }`}
    >
      <img src={image} alt="game" />
      <div className={styles.Information}>
        <h3>{props.game.name}</h3>
        <h2>#{props.rank}</h2>
        <p>
          <span>{Math.round(props.likePercentage * 100)}% </span> 
          like this game
        </p>
        <VoteSection
          game={props.game}
          liked={props.liked}
          disliked={props.disliked}
          likes={props.likes}
          dislikes={props.dislikes}
          clickedLike={props.clickedLike}
          clickedDislike={props.clickedDislike}
        />
        <Button clicked={props.clickedView} data={props.game.id} text="View" />
      </div>
    </div>
  );
};

export default GameCard;
