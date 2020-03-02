import {
    FETCH_RECOMMENDED_MOVIE_LIST_SUCCESS,
    FETCH_RECOMMENDED_MOVIE_LIST_ERROR
  } from "./actionCreators";
  
  const initialState = {
    loading: false,
    movies: [],
    error: "",
    movie: {}
  };
  
  export default function recommendedMovieListReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_RECOMMENDED_MOVIE_LIST_SUCCESS:
        return { ...state, movies: action.movies };
      case FETCH_RECOMMENDED_MOVIE_LIST_ERROR:
        return { ...state, error: action.error };
      default:
        return state;
    }
  }
  