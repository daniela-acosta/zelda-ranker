import React from "react";

import styles from "./Home.module.css";
import gamesData from "../../data/data";
import Games from "../../containers/Games/Games";

function Home() {
  return (
    <div className={styles.Home}>
      <h1>Best Zelda Games</h1>
      <Games games={gamesData} />
    </div>
  );
}

export default Home;
