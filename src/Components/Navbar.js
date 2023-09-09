import React from 'react';
import {Link} from "react-router-dom";
export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/character-design">CHARACTER DESIGN</Link>
                </li>
                {/*<li>
                    <Link to="/environment-design">ENVIRONMENT DESIGN</Link>
                </li>
                <li>
                    <Link to="/spellsonder">SPELLSONDER</Link>
    </li>*/}
                <li>
                    <a className="nav-link" href="https://docs.google.com/document/d/1KvQIGn-qW5X_6G6HwqysU3OPmI7bIQppqg8cVIPNMWY/edit" target="_blank">RESUME</a>
                </li>
            </ul>

        </nav>
    );
}
