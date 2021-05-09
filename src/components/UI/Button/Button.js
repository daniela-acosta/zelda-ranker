import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.Button}
      onClick={() => {
        props.clicked(props.data);
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
