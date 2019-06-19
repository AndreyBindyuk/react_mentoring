import React from "react";
import "./MovieSingleView.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { fetchMovieItem } from "./fetchMovieItem";
import { connect } from "react-redux";

class MovieSingleView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovie();
  }

  render() {
    const {
      title,
      release_date,
      genres,
      poster_path,
      vote_count,
      overview
    } = this.props.movie;
    return (
      <div className="movie-view-container">
        <img className="movie-image" alt="#" src={poster_path} />
        <div className="movie-info-container">
          <button className="btn-s">SEARCH</button>
          <h1 className="movies-title">{title}</h1>
          <ul className="movie-meta">
            <li>
              <strong>Rating:</strong>
              <Rater total={10} rating={vote_count} interactive={false} />
            </li>
            <li>
              <strong>Длина:</strong> 180 min
            </li>
            <li>
              <strong>Премьера:</strong> {release_date}
            </li>
            <li>
              <strong>Категория:</strong> {genres}
            </li>
          </ul>
          <div className="movie-text">{overview}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchMovie: fetchMovieItem
};

const mapStateToProps = state => ({
  movie: state.movieItem.movie
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSingleView);
