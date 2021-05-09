import React from 'react';

import styles from "./GameCard.module.css";
import ocarina from "../../../../images/ocarinaoftime.jpg";
import VoteSection from './VoteSection/VoteSection';
import Button from "../../../UI/Button/Button";
// const images = require.context("../../../../images", true, /.jpg$/);

const GameCard = (props) => {
return(
    <div className={styles.GameCard}>
        <img src={ocarina} alt="game"/>
        {/* <img src={images(`./${props.game.name.replace(" ","").toLowerCase()}`)} alt=""></img> */}
        <div className={styles.Information}>
            <h4>{props.game.name}</h4>
            <h2>#{props.game.rank}</h2>
            <VoteSection />
            <Button clicked={props.clicked} data={props.game.id} text="View"/>
        </div>
    </div>
);
}

export default GameCard;