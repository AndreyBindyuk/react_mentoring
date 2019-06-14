import {
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_LIST_ERROR
} from "./actionCreators";

const initialState = {
  movies: [],
  error: "",
  movie: {}
};

export function movieListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_LIST_SUCCESS:
      return { ...state, movies: action.movies };
    case FETCH_MOVIE_LIST_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
