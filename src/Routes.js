import React from "react";
import { Route, Switch, Redirect, useParams } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

function Routes({dogs}) {
    console.log("Routes dogs:",dogs);
    return (
        <Switch>
            <Route exact path="/dogs" >
                <DogList dogs={dogs}/>
            </Route>
            <Route exact path="/dogs/:name" >
                <DogDetails dogs={dogs} />
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
}

export default Routes;