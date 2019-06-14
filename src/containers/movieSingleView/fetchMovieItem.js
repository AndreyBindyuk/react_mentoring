import { fetchMovieItemSuccess, fetchMovieItemError } from "./actionCreators";

export function fetchMovieItem(id) {
  return dispatch => {
    fetch("https://reactjs-cdp.herokuapp.com/movies"+"/"+"320288")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
        dispatch(fetchMovieItemSuccess(res));
        return res;
      })
      .catch(error => {
        fetchMovieItemError(error);
        return error;
      });
  };
}
