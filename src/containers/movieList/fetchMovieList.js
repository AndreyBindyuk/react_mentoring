import { fetchMovieListSuccess, fetchMovieListError } from "./actionCreators";

export function fetchMovieList(sort_by, search_by, query) {
  console.log("НАХУЙ: " +sort_by);
  return dispatch => {
    if(query === ""){
      fetch("https://reactjs-cdp.herokuapp.com/movies" + "?sortBy=" + sort_by + "&sortOrder=desc")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchMovieListSuccess(res.data));
        return res.data;
      })
      .catch(error => {
        fetchMovieListError(error);
        return error;
      });
    }
    
  };
}


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
