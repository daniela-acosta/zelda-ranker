import React, { useState } from "react";

import styles from "./Layout.module.css";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

function Layout(props) {
    const [showSidedrawer, setShowSidedrawer] = useState(false);

    const toggleShowSidedrawer = () => {
        setShowSidedrawer(prevState => !prevState);
    }

    const handleCloseSidedrawer = () => {
        setShowSidedrawer(false);
    }

    return (
        <React.Fragment>
            <Sidedrawer show={showSidedrawer} clicked={() => handleCloseSidedrawer()}/>
            <Toolbar clicked={toggleShowSidedrawer}/>
            <main className={styles.Main}>{props.children}</main>
        </React.Fragment>
    );
}

export default Layout;