import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware} from "redux";
import { movieListReducer } from './containers/movieList/MovieListReducer';
import { movieItemReducer } from './containers/movieSingleView/MovieItemReducer';
import App from "./App";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieItem: movieItemReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("div1");
ReactDOM.render(
  // console.log({store}),
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
