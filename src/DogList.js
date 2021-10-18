import React from "react";
import { Link } from 'react-router-dom';

/** Displays all of the dog info
 * 
 * props:
 * - dogs
 * 
 * state:
 * -none
 * 
 * events:
 * -none
 */

function DogList({ dogs }) {
    console.log("DogList", { dogs });
    return (
        <div>
            {dogs.map(dog => (
                <div key={`${dog.name.toLowerCase()}`}>
                    <img src={`/${dog.src}.jpg`} alt={dog.src} />
                    <h2>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                            {dog.name}
                        </Link>
                    </h2>
                </div>
            ))}
        </div>
    );
}
// the index.html is the site, so don't need to back out to access the other files
// in the public folder
export default DogList;