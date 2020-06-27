import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import {appReducer} from './reducer';
import thunk from "redux-thunk";

const logger = ({ getSmurfs }) => next => action => {
    console.log("Dispatching action:", action);
    next(action);
  };
  
  let store = createStore(appReducer, applyMiddleware(logger, thunk));
  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
