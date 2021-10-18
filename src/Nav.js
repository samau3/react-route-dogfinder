import React from "react";
import { NavLink } from "react-router-dom";

/** Navigational links to each dog and home page
 * 
 * props:
 * - dogs
 * 
 * state:
 * -none
 * 
 * events:
 * -none
 * 
 */

function Nav({ dogs }) {
    console.log("Nav", { dogs });
    return (
        <ul>
            <NavLink exact to="/dogs">
                Home
            </NavLink>
            {dogs.map(dog => (
                <li key={dog.name}>
                    <NavLink exact to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default Nav;
