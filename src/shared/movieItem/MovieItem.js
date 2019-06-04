import React from "react";
import "./Movie.css";

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, poster_src, title, date, genre } = this.props.movie;
    return (
      <div className="movie-item-container">
        <figure className="image">
          <img alt="#" src={poster_src} />
        </figure>
        <div className="movie-title">
          <span>{title}</span>
        </div>
        <div className="row">
          <span>{genre}</span>
          <span style={{ color: "#00bbec" }}>{date}</span>
        </div>
      </div>
    );
  }
}

export default MovieItem;
