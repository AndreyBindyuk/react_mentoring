import { fetchMovieListSuccess, fetchMovieListError } from "./actionCreators";
import { FETCH_MOVIE_LIST_ERROR, FETCH_MOVIE_LIST_SUCCESS, FETCH_MOVIES } from "./actionCreators";
import { ProxyURL } from "../../ProxyURL";
import { call, put, all, takeLatest } from "redux-saga/effects";

export function* fetchMovieList(action) {
  const response = yield call(fetch, fetchListImpl(action.sort_by, action.search_by, action.query));
  const movies = yield response.json();
  yield put(fetchMovieListSuccess(movies));
}

export const fetchMovies = (sort_by, search_by, query) => ({
  type: FETCH_MOVIES,
  sort_by,
  search_by,
  query
});

function fetchListImpl(sort_by, search_by, query) {
  var URL = ProxyURL + "?sortBy=" + sort_by + "&sortOrder=desc";
  if (query != "" && query != null && query != undefined) {
    URL += "&search=" + query + "&searchBy=" + search_by;
  }
  return URL;
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovieList);
}

export function* moviesSaga() {
  yield all([watchFetchMovies()]);
}


