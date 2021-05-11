import React from "react";

import styles from "./Icon.module.css";

const Icon = (props) => {
  // console.log("[ICON]", props)
  let icon = (
    <div className={styles.Icon}>
      <i className={props.typeUnactive} onClick={props.clicked}></i>
      <label>{props.type}</label>
      <p>({props.data})</p>
    </div>
  );
  if (props.active) {
    icon = (
      <div className={styles.Icon}>
        <i className={props.typeActive} onClick={props.clicked}></i>
        <label>{props.type}</label>
        <p>({props.data})</p>
      </div>
    );
  }

  return icon;
};

export default Icon;
