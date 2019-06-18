export const SORT_MOVIES_SUCCESS = "SORT_MOVIES_SUCCESS";
export const SORT_MOVIES_ERROR = "SORT_MOVIES_ERROR";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_ERROR = "SEARCH_MOVIES_ERROR";

export const sortMoviesSuccess = sort_by => {
  return {
    type: SORT_MOVIES_SUCCESS,
    sort_by: sort_by
  };
};

// export const sortMoviesError = error => {
//   return {
//     type: SORT_MOVIES_ERROR,
//     error: error
//   };
// };

export const searchMoviesSuccess = search_by => {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    search_by: search_by
  };
};

// export const searchMoviesError = error => {
//   return {
//     type: SEARCH_MOVIES_ERROR,
//     error: error
//   };
// };
