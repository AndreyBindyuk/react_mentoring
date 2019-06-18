import {
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_LIST_ERROR
} from "./actionCreators";

const initialState = {
  movies: [],
  error: "",
  movie: {}
};

export default function movieListReducer(state = initialState, action) {
  // console.log(action.movies);
  switch (action.type) {
    case FETCH_MOVIE_LIST_SUCCESS:
      // console.log(state);
      return { ...state, movies: action.movies };
    case FETCH_MOVIE_LIST_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
