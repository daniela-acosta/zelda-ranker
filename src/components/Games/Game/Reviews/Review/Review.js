import React from "react";

import styles from "./Review.module.css";
const Review = props => {
    return (
        <div className={styles.Review}>
            <h5>{props.user}</h5>
            <p>{props.text}</p>
        </div>
    );
}

export default Review;