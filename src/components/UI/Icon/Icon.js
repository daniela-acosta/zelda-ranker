import React from "react";

import styles from "./Icon.module.css";

const Icon = (props) => {

  let icon = (
    <div className={styles.Icon}>
      <i className={props.typeUnactive} onClick={props.clicked}></i>
      <label>{props.type}</label>
    </div>
  );
  if (props.active) {
    icon = <div className={styles.Icon}>
    <i className={props.typeActive} onClick={props.clicked}></i>
    <label>{props.type}</label>
  </div>;
  }

  return icon;
};

export default Icon;
