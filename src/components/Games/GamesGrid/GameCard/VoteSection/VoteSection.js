import React, { useEffect, useState } from "react";

import styles from "./VoteSection.module.css";
import Icon from "../../../../UI/Icon/Icon";

const VoteSection = (props) => {

  return (
    <div className={styles.VoteSection}>
      <Icon
        active={props.liked}
        type="Like"
        typeActive="fas fa-thumbs-up"
        typeUnactive="far fa-thumbs-up"
        clicked={props.clickedLike}
        data={props.likes}
      />
      <Icon
        active={props.disliked}
        type="Dislike"
        typeActive="fas fa-thumbs-down"
        typeUnactive="far fa-thumbs-down"
        clicked={props.clickedDislike}
        data={props.dislikes}
      />
    </div>
  );
};

export default VoteSection;
