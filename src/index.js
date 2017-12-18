import "babel-polyfill";
import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";

import {loadState, saveState} from "./localstorage";
import allReducers from "./combinedreducers";
import App from "./app/app";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

const persistedState = loadState();

const middleware = applyMiddleware(thunk);

const store = createStore(allReducers, persistedState, middleware);

store.subscribe(() => {
  saveState({
    results: store
      .getState()
      .results
  });
});

ReactDom.render(
  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>, document.getElementById("root"));
