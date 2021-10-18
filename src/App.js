import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import Nav from './Nav';
import axios from "axios";
import React, { useState } from 'react';


function App() {
  let [dogs, setDogs] = useState([]);
  let [shouldLoad, setShouldLoad] = useState(true);

  console.log("App - dogs:", { dogs });
  console.log("App - shouldLoad:", { shouldLoad });

  async function getDogs() {
    let response = await axios.get("http://localhost:5000/dogs");
    setDogs(dogs => response.data);
  }

  if (shouldLoad) {
    setShouldLoad(false);
    getDogs();
    // console.log("shouldLoad, what is dogs?",dogs);
  }

  if (dogs.length === 0) {
    return <h1>Wait for it...</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome!</h1>
        <Nav dogs={dogs} />
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
