import React, { useEffect } from "react";
import MovieItem from "../../shared/movieItem/MovieItem";
import { connect } from "react-redux";
import { fetchMovieList, fetchMovies } from "./fetchMovieList";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Loader from '../Loader/index';

export class MovieItemList extends React.Component {
  componentWillMount() {
    console.log("hUETAAAAAA");
    let {sorting, searching, query} =  this.props
      this.props.fetchMovies(
        sorting,
        searching,
        query
      );
  }

  componentDidUpdate(prevProps, prevState) {
    const sorting = this.props.sorting;
    const searching = this.props.searching;
    const query = this.props.query;
    if (prevProps.sorting !== sorting) {
      this.props.fetchMovies(
        this.props.sorting,
        this.props.searching,
        this.props.query
      );
    }
    if (prevProps.query !== query) {
      this.props.fetchMovies(
        this.props.sorting,
        this.props.searching,
        this.props.query
      );
    }
  }

  render() {
    if (this.props.loading) {
      return <div>Loading....</div>; 
  }
    return (
      <div className="movie-list-container">
        {this.props.movieList.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

const mapStateToProps = state => ({
  sorting: state.searchContainer.sort_by,
  searching: state.searchContainer.search_by,
  query: state.searchContainer.query,
  movieList: state.movieList.movies,
  loading: state.movieList.loading,
});

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieItemList);


  /* <Loader loading={this.props.loading} /> */