import React, { useState } from "react";

import styles from "./VoteSection.module.css";
import Icon from "../../../../UI/Icon/Icon";

const VoteSection = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prevState) => !prevState);
    if (disliked) {
      setDisliked(false);
    }
  };

  const handleDisLikeClick = () => {
    setDisliked((prevState) => !prevState);
    if(liked) {
        setLiked(false);
    }
  };

  return (
    <div className={styles.VoteSection}>
      <Icon
        active={liked}
        type="Like"
        typeActive="fas fa-thumbs-up"
        typeUnactive="far fa-thumbs-up"
        clicked={handleLikeClick}
      />
      <Icon
        active={disliked}
        type="Dislike"
        typeActive="fas fa-thumbs-down"
        typeUnactive="far fa-thumbs-down"
        clicked={handleDisLikeClick}
      />
    </div>
  );
};

export default VoteSection;
