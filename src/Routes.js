import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

function Routes() {
    return (
        <Switch>
            <Route exact path="/dogs" >
                <DogList />
            </Route>
            <Route exact path="/dogs/:name" >
                <DogDetails />
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
}

export default Routes;