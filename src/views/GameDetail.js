import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import gamesData from "../data/data";

const GameDetail = (props) => {
  let history = useHistory();
  const [currentGame, setCurrentGame] = useState(null);

  useEffect(() => {
    const id = history.location.pathname.split("/")[1];
    const foundGame = gamesData.find(game => game.id == id);
    setCurrentGame(foundGame);
  }, [history]);

  return currentGame ? <p>Game detail: {currentGame.name}, {currentGame.year}</p> : null;
};

export default GameDetail;