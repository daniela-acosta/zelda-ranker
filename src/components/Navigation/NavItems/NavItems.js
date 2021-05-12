import React from "react";

import styles from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const NavItems = (props) => {
  return (
    <ul className={styles.NavItems}>
      <NavItem link="/" clicked={props.clicked}>Home</NavItem>
      <NavItem link="/about" clicked={props.clicked}>About</NavItem>
    </ul>
  );
};

export default NavItems;
