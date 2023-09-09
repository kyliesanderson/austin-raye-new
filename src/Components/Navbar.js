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
                    <a className="nav-link" href="https://drive.google.com/file/d/18quwSEW0sUWcVwBfGJKNV2WnzSrehx25/view?usp=sharing" target="_blank">RESUME</a>
                </li>
            </ul>

        </nav>
    );
}
