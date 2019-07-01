import { fetchMovieItemSuccess, fetchMovieItemError } from "./actionCreators";

export function fetchMovieItem(id) {
  return dispatch => {
   return fetch("https://reactjs-cdp.herokuapp.com/movies"+"/"+id)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchMovieItemSuccess(res));
        return res;
      })
      .catch(error => {
        fetchMovieItemError(error);
        return error;
      });
  };
}
