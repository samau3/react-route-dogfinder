import React, { useState } from "react";
import axios from "axios";
import { useParams, Link } from 'react-router-dom';


async function DogList() {
    let [dogs, setDogs] = useState(null);

    let response = await axios.get("http://localhost:5000/dogs");
    setDogs(dogs => [...response.data]);

    return (
        <div>
            {dogs.map(dog => (
                <div key={`${dog.name}`}>
                    <img src={`../public/${dog.src}.jpg`} alt={`${dog.src}`} />
                    <h2>{`${dog.name}`}</h2>
                    <p><Link to=  </p>
                </div>
            ))}
        </div>
    )

}

export default DogList;