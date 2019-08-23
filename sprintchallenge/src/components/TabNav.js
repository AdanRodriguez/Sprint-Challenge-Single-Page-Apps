import React from "react";
import {NavLink} from "react-router-dom";
// import { Tab, Menu, Icon } from "semantic-ui-react";

const TabNav = () => {
    return (
        <div>
            <div className="navigation">
                <div>
                    <NavLink to="/">Home Page</NavLink>
                </div>
                <div>
                    <NavLink to="/characters">Characters</NavLink>
                </div>
                <div>
                    <NavLink to="/locations">Locations</NavLink>
                </div>
                <div>
                    <NavLink to="/episodes">Episodes</NavLink>
                </div>
            </div>
        </div>
    );
};

export default TabNav;