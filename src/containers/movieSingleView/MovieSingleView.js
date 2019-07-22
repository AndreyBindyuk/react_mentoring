import React from 'react';
import './MovieSingleView.css';
import Rater from 'react-rater';
import './react-rater.css';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { fetchItem } from './fetchMovieItem';

export class MovieSingleView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchItem(id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params !== this.props.match.params) {
      const { id } = this.props.match.params;
      this.props.fetchItem(id);
    }
  }

  render() {
    const {
      title,
      release_date,
      genres,
      poster_path,
      vote_count,
      overview,
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

// const mapDispatchToProps = {
//   fetchMovie: fetchMovieItem
// };

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchItem,
}, dispatch);

const mapStateToProps = state => ({
  movie: state.movieItem.movie,
  loading: state.movieItem.loading,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MovieSingleView),
);
