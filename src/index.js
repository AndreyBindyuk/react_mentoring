import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import App from "./App";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("div1");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
