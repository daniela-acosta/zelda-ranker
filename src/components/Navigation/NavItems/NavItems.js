import React from "react";

import styles from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const NavItems = () => {
  return (
    <ul className={styles.NavItems}>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/2">About</NavItem>
    </ul>
  );
};

export default NavItems;
