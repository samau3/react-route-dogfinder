import React from "react";
import { useParams } from "react-router-dom";

/** Shows all of the info about a single dog
 * 
 * props:
 * -dogs
 * 
 * state:
 * -none
 * 
 * events:
 * -none
 */

function DogDetails({ dogs }) {
    const { name } = useParams();

    console.log("DogDetails", { dogs, name });

    const requestedDog = dogs.find(dog =>
        dog.name.toLowerCase() === name);

    console.log("DogDetails - requestedDog:", { requestedDog });

    return (
        <div>
            <p>Name: {requestedDog.name}</p>
            <img src={`../${requestedDog.src}.jpg`} alt={`${requestedDog.src}`} />
            <p>Age: {requestedDog.age} </p>
            <p>Facts:
                <ul>
                    {requestedDog.facts.map(fact => (
                        <li key={fact}>
                            Fact: {fact}</li>
                    ))}
                </ul>
            </p>
        </div>
    )
}

export default DogDetails;