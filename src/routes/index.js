import React from "react";
import {Route, Switch, Link} from "react-router-dom";

import ViewResults from "../results/viewresults/view-results-container";
import AddResults from "../results/addresults/add-result-form-container";
import ViewLeague from "../league/viewleague/view-league-container";

const router = () => (
    <Switch>
        <Route exact path="/" component={ViewResults}/>
        <Route path="/addresults" component={AddResults}/>
        <Route path="/viewleague" component={ViewLeague}/>
    </Switch>
);

export default router;
