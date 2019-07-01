import React from "react";
import MovieItem from "../../shared/movieItem/MovieItem";
import { connect } from "react-redux";
import { fetchRecommendedMovies } from "./fetchRecommendedMovieList";
import { withRouter } from "react-router-dom";

export class RecommendedMovieList extends React.Component {
  componentDidMount() {
      this.props.fetchRecommendedMovies(
        this.props.movie
      );
  }

//   componentDidUpdate(prevProps, prevState) {
//     const sorting = this.props.sorting;
//     const searching = this.props.searching;
//     const query = this.props.query;
//     if (prevProps.sorting !== sorting) {
//       this.props.fetchMovies(
//         this.props.sorting,
//         this.props.searching,
//         this.props.query
//       );
//     }
//     if (prevProps.query !== query) {
//       this.props.fetchMovies(
//         this.props.sorting,
//         this.props.searching,
//         this.props.query
//       );
//     }
//   }

  render() {
    console.log(this.props.movieList);
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

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecommendedMovieList);
