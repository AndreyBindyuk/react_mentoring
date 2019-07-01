import React from "react";
import MovieItem from "../../shared/movieItem/MovieItem";
import { connect } from "react-redux";
import { fetchRecommendedMovies } from "./fetchRecommendedMovieList";
import { withRouter } from "react-router-dom";

export class RecommendedMovieList extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const movie = this.props.movie;
    if (prevProps.movie !== movie) {
      this.props.fetchRecommendedMovies(this.props.movie);
    }
  }

  render() {
    return (
      <div className="movie-list-container">
        {this.props.movieList.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchRecommendedMovies: fetchRecommendedMovies
};

const mapStateToProps = state => ({
  movie: state.movieItem.movie,
  movieList: state.recommendedMovieList.movies
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedMovieList);
