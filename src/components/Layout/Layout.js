import React, { useState } from "react";

import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

function Layout(props) {
    const [showSidedrawer, setShowSidedrawer] = useState(false);

    const toggleShowSidedrawer = () => {
        setShowSidedrawer(prevState => !prevState);
    }

    const handleBackdropClick = () => {
        setShowSidedrawer(false);
    }

    return (
        <React.Fragment>
            <Sidedrawer show={showSidedrawer} clicked={handleBackdropClick}/>
            <Toolbar clicked={toggleShowSidedrawer}/>
            <main>{props.children}</main>
        </React.Fragment>
    );
}

export default Layout;