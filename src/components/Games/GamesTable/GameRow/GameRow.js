import React from "react";

import styles from "./GameRow.module.css";
import Button from "../../../UI/Button/Button";
import VoteSection from "../../VoteSection/VoteSection";

const GameRow = (props) => {
  const gameName = props.game.name
    .replace(/\s/g, "")
    .replace("'", "")
    .toLowerCase();
  const image = require("../../../../images/" + gameName + ".jpg").default;
  console.log(props.rank === 1);
  return (
    <tr className={styles.GameRow}>
      <td className={styles.Cell}>
        <h2>#{props.rank}</h2>
      </td>
      <td className={styles.Cell}>
        <img src={image} alt="game" />
      </td>
      <td className={styles.Cell}>
        <VoteSection
          game={props.game}
          liked={props.liked}
          disliked={props.disliked}
          likes={props.likes}
          dislikes={props.dislikes}
          clickedLike={props.clickedLike}
          clickedDislike={props.clickedDislike}
        />
      </td>

      <td className={`${styles.Cell} ${styles.Text}`}>{props.game.name}</td>
      <td className={`${styles.Cell} ${styles.Text}`}>{props.game.year}</td>
      <td className={styles.Cell}>
        <Button clicked={props.clickedView} text="View" data={props.game.id} />
      </td>
    </tr>
  );
};

export default GameRow;
