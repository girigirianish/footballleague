import React from "react";
import {Route, Switch, Link} from "react-router-dom";

import App from "../app/app";
import ViewResults from "../results/viewresults/view-results-container";
import AddResults from "../results/addresults/add-result-form-container";

const router = () => (
    <Switch>
        <Route exact path="" component={ViewResults}/>
        <Route path="/addresults" component={AddResults}/>
    </Switch>
);

export default router;

{
    /* <Switch>
<Route exact path="" component={ViewResults}/>
<Route path="/addresults" component={AddResults}/>
</Switch> */
}
