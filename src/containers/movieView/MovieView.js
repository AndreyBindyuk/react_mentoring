import React from "react";
import MovieSingleView from "../movieSingleView/MovieSingleView";
import MovieItemList from "../movieList/MovieItemList";
import RecommendedMovieList from "../recommendedMovies/RecommendedMovieList";
import Footer from "../../shared/footer/Footer";
import { withRouter } from "react-router-dom";

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
