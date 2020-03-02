// import { createSelector } from 'reselect';
// import moment from 'moment';

// const getMovies = (state) => state.movieList.movies;
// const getSortingType = (state) => state.searchContainer.sort_by;

// const sortByRatingCallback = (movie1, movie2) => {
//   if(movie1.title <= movie2.title) {return 1} else {return -1}

// };
// const sortByReleaseDateCallback = (movie1, movie2) => {
//   if(moment(movie1.vote_count).isSameOrBefore(moment(movie2.vote_count))) {return 1} else {return -1}
// };

// export const sortMovies = createSelector(
//   [getMovies, getSortingType], 
//   (movies, sort_by) => {
//     return movies.slice(0, movies.length).sort(sort_by === 'vote_average' ? sortByRatingCallback : sortByReleaseDateCallback);    
//   }
//   );
