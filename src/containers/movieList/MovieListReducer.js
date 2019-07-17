import {
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_LIST_ERROR,
  FETCH_MOVIES
} from "./actionCreators";

const initialState = {
  loading: false,
  movies: [],
  error: "",
  movie: {}
};

export default function  movieListReducer(state = initialState, action={}){
  switch (action.type) {
    case FETCH_MOVIES:
        return { ...state, loading: true };
    case FETCH_MOVIE_LIST_SUCCESS:
      return { ...state, loading: false, movies: action.movies};
    case FETCH_MOVIE_LIST_ERROR:
      return { ...state, loading: false, error: action.error};
    default:
      return state;
  }
}
