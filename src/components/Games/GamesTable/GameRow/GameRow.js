import React from "react";

import Button from "../../../UI/Button/Button";
import VoteSection from "../../VoteSection/VoteSection";

const GameRow = (props) => {
  const gameName = props.game.name
    .replace(/\s/g, "")
    .replace("'", "")
    .toLowerCase();
  const image = require("../../../../images/" + gameName + ".jpg").default;

  return (
    <tr>
      <td>{props.rank}</td>
      <td>
        <img src={image} alt="game" />
      </td>
      <VoteSection
          game={props.game}
          liked={props.liked}
          disliked={props.disliked}
          likes={props.likes}
          dislikes={props.dislikes}
          clickedLike={props.clickedLike}
          clickedDislike={props.clickedDislike}
        />
      <td>{props.game.name}</td>
      <td>{props.game.year}</td>
      <td>
        <Button clicked={props.clickedView} text="View" data={props.game.id} />
      </td>
    </tr>
  );
};

export default GameRow;
