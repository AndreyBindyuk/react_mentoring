export const FETCH_MOVIE_LIST_SUCCESS = "FETCH_MOVIE_LIST_SUCCESS";
export const FETCH_MOVIE_LIST_ERROR = "FETCH_MOVIE_LIST_ERROR";
export const FETCH_MOVIES = "users/FETCH";

export const fetchMovieListSuccess = movies => {
  return {
    type: FETCH_MOVIE_LIST_SUCCESS,
    movies: movies.data
  };
};

export const fetchMovieListError = error => {
  return {
    type: FETCH_MOVIE_LIST_ERROR,
    error: error
  };
};
