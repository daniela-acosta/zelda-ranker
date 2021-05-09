import React, { useState } from "react";

import styles from "./Home.module.css";
import gamesData from "../../data/data";
import GamesGrid from "../../components/Games/GamesGrid/GamesGrid";
import GamesTable from "../../components/Games/GamesTable/GamesTable";

function Home() {
  const [gridDisplay, setGridDisplay] = useState(true);

  const toggleDisplay = () => {
    setGridDisplay((prevState) => !prevState);
  };

  return (
    <div className={styles.Home}>
      <h1>Best Zelda Games of All Time</h1>
      <p>(that I have played)</p>
      <button onClick={toggleDisplay}>Toggle</button>

      <GamesGrid games={gamesData} show={gridDisplay} />
      <GamesTable games={gamesData} show={!gridDisplay} />
    </div>
  );
}

export default Home;
