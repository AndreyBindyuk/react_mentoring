import { fetchMovieListSuccess, fetchMovieListError } from "./actionCreators";

export function fetchMovieList(sort_by, search_by, query) {
  // console.log(query);
  return dispatch => {
    fetch(fetchListImpl(sort_by, search_by, query))
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        console.log(res.data);
        dispatch(fetchMovieListSuccess(res.data));
        return res.data;
      })
      .catch(error => {
        fetchMovieListError(error);
        return error;
      });
  };
}

function fetchListImpl(sort_by, search_by, query) {
  // var URL = "";
  var URL =
      "https://reactjs-cdp.herokuapp.com/movies" +
      "?sortBy=" +
      sort_by +
      "&sortOrder=desc";
  // if (query == "" || query == null || query == undefined) {
  //   console.log(sort_by+" : "+search_by+" : "+query)
  //   URL =
  //     "https://reactjs-cdp.herokuapp.com/movies" +
  //     "?sortBy=" +
  //     sort_by +
  //     "&sortOrder=desc";
  // }
  // if ((query != "") && (query != null) && (query != undefined)) {
  //   console.log(3);
  //   console.log(sort_by+" : "+search_by+" : "+query)
  //     URL =
  //     "https://reactjs-cdp.herokuapp.com/movies?sortBy="+sort_by+"&sortOrder=desc&"+"search=" +
  //     query +
  //     "&searchBy=" +
  //     search_by;
  // } 
  if ((query != "") && (query != null) && (query != undefined)) {
      URL +=  "&search=" + query + "&searchBy=" + search_by;
  } 
  return URL;
}