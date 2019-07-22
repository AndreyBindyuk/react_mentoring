import { combineReducers } from 'redux';
import movieListReducer from './containers/movieList/MovieListReducer';
import movieItemReducer from './containers/movieSingleView/MovieItemReducer';
import searchContainerReducer from './containers/searchContainer/SearchContainerReducer';
import recommendedMovieListReducer from './containers/recommendedMovies/RecommendedMovieListReducer';

export default combineReducers({
  movieList: movieListReducer,
  movieItem: movieItemReducer,
  searchContainer: searchContainerReducer,
  recommendedMovieList: recommendedMovieListReducer,
});
