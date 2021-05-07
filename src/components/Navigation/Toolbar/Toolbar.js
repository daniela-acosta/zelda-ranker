import React from "react";

import styles from "./Toolbar.module.css";
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import DrawerToggle from "./DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <Logo />
      <DrawerToggle clicked={props.clicked}/>
      <nav className={styles.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

export default Toolbar;
