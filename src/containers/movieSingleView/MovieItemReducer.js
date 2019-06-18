import {
  FETCH_MOVIE_ITEM_SUCCESS,
  FETCH_MOVIE_ITEM_ERROR
} from "./actionCreators";

const initialState = {
  movies: [],
  error: "",
  movie: {}
};

export default function movieItemReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_ITEM_SUCCESS:
      return { ...state, movie: action.movie };
    case FETCH_MOVIE_ITEM_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
