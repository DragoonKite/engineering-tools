import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <header className="flex-row px-1">
            <h1>
                <Link to="/">
                    Home
                </Link>
            </h1>

            <nav>
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/unit">
                        Unit Conversion
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/static">
                        Static Equations
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;