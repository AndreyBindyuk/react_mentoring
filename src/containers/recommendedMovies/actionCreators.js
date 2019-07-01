export const FETCH_RECOMMENDED_MOVIE_LIST_SUCCESS = "FETCH_RECOMMENDED_MOVIE_LIST_SUCCESS";
export const FETCH_RECOMMENDED_MOVIE_LIST_ERROR = "FETCH_RECOMMENDED_MOVIE_LIST_ERROR";

export const fetchRecommendedMovieListSuccess = movies => {
  return {
    type: "FETCH_RECOMMENDED_MOVIE_LIST_SUCCESS",
    movies: movies
  };
};

export const fetchRecommendedMovieListError = error => {
  return {
    type: "FETCH_RECOMMENDED_MOVIE_LIST_ERROR",
    error: error
  };
};
