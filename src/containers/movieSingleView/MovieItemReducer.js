import {
  FETCH_MOVIE_ITEM_SUCCESS,
  FETCH_MOVIE_ITEM_ERROR,
  FETCH_MOVIE_ITEM
} from "./actionCreators";

const initialState = {
  loading: false,
  movies: [],
  error: "",
  movie: {}
};

export default function movieItemReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_ITEM:
        return { ...state, loading: true };
    case FETCH_MOVIE_ITEM_SUCCESS:
      return { ...state, loading: false, movie: action.movie };
    case FETCH_MOVIE_ITEM_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
