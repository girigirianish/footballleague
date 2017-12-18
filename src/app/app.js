import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import ViewResults from "../results/viewresults/view-results-container";
import AddResults from "../results/addresults/add-result-form-container";
import ViewLeague from "../league/viewleague/view-league-container";
import TestIt from "../results/addresults/test";
import Header from "./header/header";
import AppRoute from "../routes";
import {Button} from "react-bootstrap";

const App = () => (
  <div className="container">
    {/* <Header/> */}
    <div className="pannel pannel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-sm-4">
            <Link to="/">
              <Button>Result</Button>
            </Link>
          </div>
          <div className="col-sm-4 ">
            <Link to="/addresults">
              <Button>New Result</Button>
            </Link>
          </div>
          <div className="col-sm-4">
            <Link to="/viewleague">
              <Button>Table</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Switch>
        <Route exact path="/" component={ViewResults}/>
        <Route path="/addresults" component={AddResults}/>
        <Route path="/viewleague" component={ViewLeague}/>
      </Switch>
    </div>
  </div>
);

export default App;
