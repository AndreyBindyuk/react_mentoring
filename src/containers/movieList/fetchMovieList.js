import { fetchMovieListSuccess, fetchMovieListError } from "./actionCreators";

export function fetchMovieList() {
  return dispatch => {
    fetch("https://reactjs-cdp.herokuapp.com/movies")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchMovieListSuccess(res.data));
        return res.data;
      })
      .catch(error => {
        fetchMovieListError(error);
        return error;
      });
  };
}
