import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import  movieListReducer  from "./containers/movieList/MovieListReducer";
import  movieItemReducer  from "./containers/movieSingleView/MovieItemReducer";
import  sortMoviesReducer from "./containers/searchContainer/SearchContainerReducer";
import  rootReducer from "./rootReducer";
import App from "./App";
import thunk from "redux-thunk";

const initialState = {
  movies: [],
  error: "",
  movie: {}
};
// const initialState = {};

// const rootReducer = (initialState,action) =>{
//   return{
//     movieList: movieListReducer(initialState, action),
//     movieItem: movieItemReducer(initialState, action),
//     sortMovies: sortMoviesReducer(initialState, action)
//   }
// };

// const rootReducer = combineReducers({
//     movieList: movieListReducer,
//     movieItem: movieItemReducer,
//     sortMovies: sortMoviesReducer
// });
// const rootReducer = (state = initialState, action) => {
//   return{
//     movieList: movieListReducer(state,action),
//     movieItem: movieItemReducer(state,action),
//     sortMovies: sortMoviesReducer(state,action)
//   }
// }


const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store.getState);

const rootElement = document.getElementById("div1");
ReactDOM.render(
  // console.log({store}),
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
