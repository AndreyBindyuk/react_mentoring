import { fetchMovieListSuccess, fetchMovieListError } from "./actionCreators";

export function fetchMovieList(sort_by, search_by, query) {
  return dispatch => {
    return fetch(fetchListImpl(sort_by, search_by, query))
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        // console.log(res);
        dispatch(fetchMovieListSuccess(res.data));
        return res.data;
      })
      .catch(error => {
        fetchMovieListError(error);
        return error;
      });
  };
}

function fetchListImpl(sort_by, search_by, query) {
  var URL =
    "https://reactjs-cdp.herokuapp.com/movies" +
    "?sortBy=" +
    sort_by +
    "&sortOrder=desc";
  if (query != "" && query != null && query != undefined) {
    URL += "&search=" + query + "&searchBy=" + search_by;
  }
  return URL;
}
