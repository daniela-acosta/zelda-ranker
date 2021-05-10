import React, { useEffect, useState } from "react";

import styles from "./VoteSection.module.css";
import Icon from "../../../../UI/Icon/Icon";

const VoteSection = (props) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
      if(props.voteState === "liked") {
        setLiked(true);
        setDisliked(false);
      } else if (props.voteState === "disliked") {
          setDisliked(true);
          setLiked(false);
      } else {
        setDisliked(false);
        setLiked(false);
      }
  }, [props])

    const handleLikeClick = (gameId) => {
    setLiked((prevState) => !prevState);
    if (disliked) {
      setDisliked(false);
      localStorage.setItem(gameId, "liked");
    } else if (liked) {
      localStorage.setItem(gameId, "none");
    } else {
      localStorage.setItem(gameId, "liked");
    }
  };

  const handleDisLikeClick = (gameName) => {
    setDisliked((prevState) => !prevState);
    if (liked) {
      setLiked(false);
      localStorage.setItem(gameName, "disliked");
    } else if (disliked) {
      localStorage.setItem(gameName, "none");
    } else {
      localStorage.setItem(gameName, "disliked");
    }
  };

  

  return (
    <div className={styles.VoteSection}>
      <Icon
        active={liked}
        type="Like"
        typeActive="fas fa-thumbs-up"
        typeUnactive="far fa-thumbs-up"
        clicked={() => handleLikeClick(props.game.id.toString())}
        data={props.likes}
      />
      <Icon
        active={disliked}
        type="Dislike"
        typeActive="fas fa-thumbs-down"
        typeUnactive="far fa-thumbs-down"
        clicked={() => handleDisLikeClick(props.game.id.toString())}
        data={props.dislikes}
      />
    </div>
  );
};

export default VoteSection;
