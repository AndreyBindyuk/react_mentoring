export const SORT_MOVIES_SUCCESS = 'SORT_MOVIES_SUCCESS';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';

export const sortMoviesSuccess = sort_by => ({
  type: SORT_MOVIES_SUCCESS,
  sort_by,
});
export const searchMoviesSuccess = (search_by, query) => ({
  type: SEARCH_MOVIES_SUCCESS,
  search_by,
  query,
});
