import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={styles.NavItem} onClick={props.clicked}>
      <NavLink to={props.link} exact>{props.children}</NavLink>
    </li>
  );
};

export default NavItem;
