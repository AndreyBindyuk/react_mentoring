import { sortMoviesSuccess, searchMoviesSuccess } from "./actionCreators";

export function sortService(sort_by) {
  return dispatch => {
    dispatch(sortMoviesSuccess(sort_by));
  };
}

export function searchService(search_by, query) {
  return dispatch => {
    dispatch(searchMoviesSuccess(search_by, query));
  };
}
