import React from "react";
import "./MovieSingleView.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

class MovieSingleView extends React.Component {
  render() {
    return (
      <div className="movie-view-container">
        <img
          className="movie-image"
          alt="#"
          src="https://st.kp.yandex.net/images/film_iphone/iphone360_843650.jpg"
        />
        <div className="movie-info-container">
          <button className="btn-s">SEARCH</button>
          <h1 className="movies-title">Мстители: Финал</h1>
          <ul className="movie-meta">
            <li>
              <strong>Rating:</strong>
              <Rater total={5} rating={4.5} interactive={false} />
            </li>
            <li>
              <strong>Длина:</strong> 180 min
            </li>
            <li>
              <strong>Премьера:</strong> 2019 (USA)
            </li>
            <li>
              <strong>Категория:</strong> Фэнтези
            </li>
          </ul>
          <div className="movie-text">
            asdasd asd asd as asd as as das as asd asqwe qweqw asda qwe qw asd
            asd asqwe asd
          </div>
        </div>
      </div>
    );
  }
}

export default MovieSingleView;
