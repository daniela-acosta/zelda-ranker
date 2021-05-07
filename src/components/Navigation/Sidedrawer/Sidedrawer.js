import React from "react";

import styles from "./Sidedrawer.module.css";
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Sidedrawer = (props) => {
  let classes = [styles.Sidedrawer, styles.Closed];
  if (props.show) {
    classes = [styles.Sidedrawer, styles.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.clicked}/>
      <div className={classes.join(" ")}>
        <Logo />
        <nav>
          <NavItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Sidedrawer;
