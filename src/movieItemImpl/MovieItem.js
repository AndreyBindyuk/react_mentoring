import React from "react";

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div key={this.props.movie.id} className="movie-item-container">
      <figure class="image"><img alt="#" src={this.props.movie.poster_src}/></figure>
      <div class="movie-title"><span>{this.props.movie.title}</span></div>
      <div className="row">
      <span>{this.props.movie.genre}</span>
      <span style={{color:"#00bbec"}}>{this.props.movie.date}</span>
      </div>
      </div>
    );
  }
}

export default MovieItem;
