import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ names }) {
    return (
        <ul>
            <NavLink exact to="/dogs">
                Home
            </NavLink>
            {names.map(name => (
                <li key={name}>
                    <NavLink exact to={`/dogs/${name}`}>{name}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default Nav;
