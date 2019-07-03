import { fetchMovieItemSuccess, fetchMovieItemError } from "./actionCreators";
import { ProxyURL } from "../../ProxyURL";

export function fetchMovieItem(id) {
  return dispatch => {
   return fetch(ProxyURL+"/"+id)
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
