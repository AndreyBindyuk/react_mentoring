export const FETCH_MOVIE_LIST_SUCCESS = "FETCH_MOVIE_LIST_SUCCESS";
export const FETCH_MOVIE_LIST_ERROR = "FETCH_MOVIE_LIST_ERROR";

export const fetchMovieListSuccess = movies => {
  return {
    type: "FETCH_MOVIE_LIST_SUCCESS",
    movies: movies
  };
};

export const fetchMovieListError = error => {
  return {
    type: "FETCH_MOVIE_LIST_ERROR",
    error: error
  };
};
