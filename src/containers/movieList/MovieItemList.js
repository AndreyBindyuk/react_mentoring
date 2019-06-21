import React from "react";
import MovieItem from "../../shared/movieItem/MovieItem";
import { connect } from "react-redux";
import { fetchMovieList } from "./fetchMovieList";

export class MovieItemList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies(
      this.props.sorting,
      this.props.searching,
      this.props.query
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const sorting = this.props.sorting;
    const searching = this.props.searching;
    const query = this.props.query;
    if (prevProps.sorting !== sorting) {
      this.props.fetchMovies(this.props.sorting,this.props.searching, this.props.query);
    }
    if ((prevProps.query !== query)) {
      this.props.fetchMovies(this.props.sorting,this.props.searching, this.props.query);
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
  fetchMovies: fetchMovieList
};

const mapStateToProps = state => ({
  sorting: state.searchContainer.sort_by,
  searching: state.searchContainer.search_by,
  query: state.searchContainer.query,
  movieList: state.movieList.movies
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieItemList);
