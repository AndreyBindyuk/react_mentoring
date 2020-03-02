export const FETCH_MOVIE_ITEM_SUCCESS = 'FETCH_MOVIE_ITEM_SUCCESS';
export const FETCH_MOVIE_ITEM_ERROR = 'FETCH_MOVIE_ITEM_ERROR';
export const FETCH_MOVIE_ITEM = 'FETCH_MOVIE_ITEM';

export const fetchMovieItemSuccess = (movie) => {
  console.log(movie);
  return {
    type: FETCH_MOVIE_ITEM_SUCCESS,
    movie,
  };
};

export const fetchMovieItemError = error => ({
  type: FETCH_MOVIE_ITEM_ERROR,
  error,
});
