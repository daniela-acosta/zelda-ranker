import React from "react";

import Button from "../../../UI/Button/Button";

const GameRow = (props) => {
  return (
    <tr>
      <td>{props.game.rank}</td>
      <td>like</td>
      <td>{props.game.name}</td>
      <td>{props.game.name}</td>
      <td>{props.game.year}</td>
      <td>
          <Button clicked={props.clicked} text="View" data={props.game.id}/>
      </td>
    </tr>
  );
};

export default GameRow;
