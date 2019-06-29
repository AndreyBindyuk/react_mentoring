import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {id, title, release_date, genres, poster_path } = this.props.movie;
    return (
      
      <div className="movie-item-container">
        <Link to = {`/movie/${id}`}>
        <figure className="image">
          <img alt="#" src={poster_path} />
        </figure>
        </Link>
        <div className="movie-title">
          <span>{title}</span>
        </div>
        <div className="row">
          <span>{genres["1"]}</span>
          <span style={{ color: "#00bbec" }}>{release_date}</span>
        </div>
      </div>
    );
  }
}

export default MovieItem;
