import React from "react";
import MovieItem from "../../shared/movieItem/MovieItem";
import { connect } from "react-redux";
import { fetchMovieList } from "./fetchMovieList";

class MovieItemList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      // console.log(this.props.movies),
      <div className="movie-list-container">
        {this.props.movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchMovies: fetchMovieList
};

const mapStateToProps = state => ({
  movies: state.movieList.movies
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieItemList);
