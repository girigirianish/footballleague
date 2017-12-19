import React from "react";
import {Button} from "react-bootstrap";

import Header from "./header/header";
import AppRoute from "../routes";

const App = () => (
  <div className="container">
    <Header/>
    <div>
      <AppRoute/>
    </div>
  </div>
);

export default App;
