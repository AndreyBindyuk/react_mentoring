import React from "react";
import "./Movie.css";

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div key={this.props.movie.id} className="movie-item-container">
      <figure className="image"><img alt="#" src={this.props.movie.poster_src}/></figure>
      <div className="movie-title"><span>{this.props.movie.title}</span></div>
      <div className="row">
      <span>{this.props.movie.genre}</span>
      <span style={{color:"#00bbec"}}>{this.props.movie.date}</span>
      </div>
      </div>
    );
  }
}

export default MovieItem;