import {
  fetchRecommendedMovieListSuccess,
  fetchRecommendedMovieListError,
} from './actionCreators';
import { ProxyURL } from '../../ProxyURL';

export function fetchRecommendedMovies(movie) {
  return dispatch => fetch(fetchListImpl(movie.genres[0]))
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      // console.log(res);
      dispatch(fetchRecommendedMovieListSuccess(res.data));
      return res.data;
    })
    .catch((error) => {
      fetchRecommendedMovieListError(error);
      return error;
    });
}

function fetchListImpl(query) {
  const URL = `${ProxyURL}?search=${query}`;
  return URL;
}
