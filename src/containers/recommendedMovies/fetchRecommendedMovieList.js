import {
  fetchRecommendedMovieListSuccess,
  fetchRecommendedMovieListError
} from "./actionCreators";

export function fetchRecommendedMovies(movie) {
  return dispatch => {
    return fetch(fetchListImpl(movie.search_by))
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

function fetchListImpl(search_by) {
  var URL =
    "https://reactjs-cdp.herokuapp.com/movies" + "?searchBy=" + search_by;
  return URL;
}
