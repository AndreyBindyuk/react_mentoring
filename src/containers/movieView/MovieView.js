import React from 'react';
import { withRouter } from 'react-router-dom';
import MovieSingleView from '../movieSingleView/MovieSingleView';
import MovieItemList from '../movieList/MovieItemList';
import RecommendedMovieList from '../recommendedMovies/RecommendedMovieList';
import Footer from '../../shared/footer/Footer';
import './MovieView.css';

class MovieView extends React.Component {
  render() {
    return (
      <div>
        <MovieSingleView />
        {/* <RecommendedMovieList /> */}
        <MovieItemList />
        <Footer />
      </div>
    );
  }
}

export default withRouter(MovieView);
