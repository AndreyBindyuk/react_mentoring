import {
  fetchRecommendedMovieListSuccess,
  fetchRecommendedMovieListError
} from "./actionCreators";

export function fetchRecommendedMovies(movie) {
  return dispatch => {
    return fetch(fetchListImpl(movie.genres[0]))
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        // console.log(res);
        dispatch(fetchRecommendedMovieListSuccess(res.data));
        return res.data;
      })
      .catch(error => {
        fetchRecommendedMovieListError(error);
        return error;
      });
  };
}

function fetchListImpl(query) {
  var URL =
    "https://reactjs-cdp.herokuapp.com/movies" + "?search=" + query;
  return URL;
}
