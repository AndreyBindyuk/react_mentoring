import React from "react";
import "./MovieSingleView.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { fetchMovieItem } from "./fetchMovieItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export class MovieSingleView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovie(id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params !== this.props.match.params) {
      const { id } = this.props.match.params;
      this.props.fetchMovie(id);
    }
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
          <Link to="/">
            <button className="btn-s">BACK</button>
          </Link>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieSingleView)
);
