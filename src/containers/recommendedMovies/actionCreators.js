export const FETCH_RECOMMENDED_MOVIE_LIST_SUCCESS = 'FETCH_RECOMMENDED_MOVIE_LIST_SUCCESS';
export const FETCH_RECOMMENDED_MOVIE_LIST_ERROR = 'FETCH_RECOMMENDED_MOVIE_LIST_ERROR';

export const fetchRecommendedMovieListSuccess = movies => ({
  type: 'FETCH_RECOMMENDED_MOVIE_LIST_SUCCESS',
  movies,
});

export const fetchRecommendedMovieListError = error => ({
  type: 'FETCH_RECOMMENDED_MOVIE_LIST_ERROR',
  error,
});
