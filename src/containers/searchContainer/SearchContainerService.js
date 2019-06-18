import { sortMoviesSuccess, searchMoviesSuccess } from "./actionCreators";

// export function sortMoviesService(sortBy) {
//   console.log(sortBy);
//   return dispatch => {
//     fetch("https://reactjs-cdp.herokuapp.com/movies" + "?sortBy=" + sortBy + "&sortOrder=desc")
//       .then(res => res.json())
//       .then(res => {
//         if (res.error) {
//           throw res.error;
//         }
//         dispatch(sortMoviesSuccess(res.data));

//         return res.data;
//       })
//       .catch(error => {
//         sortMoviesError(error);
//         return error;
//       });
//   };
// }

export function searchContainerService(param) {
  return dispatch => {
    if (param === "release_date" || param === "vote_average") {
      dispatch(sortMoviesSuccess(param));
    }
    if (param === "genre" || param === "title") {
      dispatch(searchMoviesSuccess(param));
    }
  };
}
