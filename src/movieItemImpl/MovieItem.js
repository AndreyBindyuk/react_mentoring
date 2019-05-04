import React from "react";

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div key={this.props.movie.id} className="movie-item-container">
      <img className="image" alt="poster" src={this.props.movie.poster_src}/>
      <div className="row">
      <div>{this.props.movie.title}</div>
      <div>{this.props.movie.date}</div>
      </div>
      <div>{this.props.movie.genre}</div>
      </div>
    );
  }
}

export default MovieItem;
