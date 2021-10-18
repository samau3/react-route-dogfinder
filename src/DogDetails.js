import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {

    const { name } = useParams();

    console.log("DogDetails - useParams()", useParams());
    console.log("DogDetails - name:", { name });
    console.log("DogDetails - dogs:", { dogs });

    const requestedDog = dogs.find(dog =>
        dog.name.toLowerCase() === name)

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