import React from "react";
import MovieItem from "../../shared/movieItem/MovieItem";
import MovieStub from "../../MovieStub.json";

class MovieItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: MovieStub };
  }

  render() {
    return (
      <div className="movie-list-container">
        {this.state.movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieItemList;
