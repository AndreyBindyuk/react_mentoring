export const SORT_MOVIES_SUCCESS = "SORT_MOVIES_SUCCESS";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";

export const sortMoviesSuccess = sort_by => {
  return {
    type: SORT_MOVIES_SUCCESS,
    sort_by: sort_by
  };
};
export const searchMoviesSuccess = (search_by,query) => {
  // console.log(query);
  return {
    type: SEARCH_MOVIES_SUCCESS,
    search_by: search_by,
    query: query
  };
};
